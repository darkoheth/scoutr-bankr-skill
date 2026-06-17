#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(`Usage: node scripts/validate-report.mjs <report-or-json> [...]

Validates Scoutr output for common regression failures:
- empty or timeout reports
- verdict missing from the first line
- blank/placeholder source fields
- Bankr reports missing provenance fields
- self-launched overclaims when launcher and fee recipient differ
- liquidity left unknown when exact DEX data appears to have resolved
- markdown image/chart attachments
- direct buy/sell/hold/trade instructions

The input can be a plain text report or a JSON file containing report strings
under keys such as "response" or "scoutr_response".`);
  process.exit(0);
}

const REPORT_KEYS = new Set(["response", "scoutr_response", "report", "output"]);
const SOURCE_LABELS = ["Website/docs", "X/social", "GitHub/code"];
const REQUIRED_BANKR_FIELDS = [
  "Launcher/deployer",
  "Fee recipient",
  "Alignment",
  "Endorsement evidence",
  "Fee-claim status",
];

let failed = false;

for (const file of args) {
  const absolute = path.resolve(file);
  const text = fs.readFileSync(absolute, "utf8");
  const reports = extractReports(text, absolute);

  if (reports.length === 0) {
    failed = true;
    printFinding(absolute, "file", "No report strings found.");
    continue;
  }

  for (const report of reports) {
    const findings = validateReport(report.text);
    if (findings.length > 0) {
      failed = true;
      for (const finding of findings) {
        printFinding(absolute, report.label, finding);
      }
    }
  }
}

process.exit(failed ? 1 : 0);

function extractReports(text, file) {
  if (file.endsWith(".json")) {
    try {
      const parsed = JSON.parse(text);
      const reports = [];
      walkJson(parsed, "$", reports);
      return reports;
    } catch (error) {
      return [{ label: "text", text }];
    }
  }

  return [{ label: "text", text }];
}

function walkJson(value, label, reports) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkJson(item, `${label}[${index}]`, reports));
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const childLabel = `${label}.${key}`;
      if (REPORT_KEYS.has(key) && typeof child === "string" && shouldValidateString(key, child)) {
        reports.push({ label: childLabel, text: child });
      } else {
        walkJson(child, childLabel, reports);
      }
    }
  }
}

function shouldValidateString(key, value) {
  if (key === "scoutr_response") return true;
  return /^Verdict:/im.test(value);
}

function validateReport(report) {
  const findings = [];
  const trimmed = report.trim();

  if (!trimmed) {
    findings.push("Empty report.");
    return findings;
  }

  const firstLine = trimmed.split(/\r?\n/, 1)[0].trim();
  if (!/^Verdict:\s+\S+/i.test(firstLine)) {
    findings.push("Report does not lead with `Verdict:`.");
  }

  if (/!\[[^\]]*]\([^)]*\)/.test(trimmed)) {
    findings.push("Report contains markdown image/chart attachment.");
  }

  if (/\b(you should|recommend|i would|position as)\s+(buy|sell|hold|trade|ape|enter|exit)\b/i.test(trimmed)) {
    findings.push("Report contains direct trading instruction language.");
  }

  const lines = trimmed.split(/\r?\n/).map((line) => line.trim());
  const sourceLines = Object.fromEntries(
    SOURCE_LABELS.map((label) => [label, findField(lines, label)])
  );

  for (const line of Object.values(sourceLines)) {
    if (line && isBadSourceLine(line)) {
      findings.push(`Bad source field: \`${line}\``);
    }
  }

  const sourceTrace = findField(lines, "Source trace");
  if (sourceTrace) {
    for (const [label, line] of Object.entries(sourceLines)) {
      const sourceType = label.split("/")[0].toLowerCase();
      if (sourceTraceClaimsConcreteSource(sourceTrace, sourceType) && (!line || isBadSourceLine(line))) {
        findings.push(`Source trace claims ${label} was found, but the ${label} field is missing or non-concrete.`);
      }
    }
  }

  const launchSource = findField(lines, "Launch source");
  const isBankr = launchSource && /\bBankr\b/i.test(launchSource);
  if (isBankr) {
    for (const label of REQUIRED_BANKR_FIELDS) {
      const line = findField(lines, label);
      if (!line || isBlankValue(line, label)) {
        findings.push(`Bankr report missing \`${label}\`.`);
      }
    }

    const launcher = findField(lines, "Launcher/deployer");
    const feeRecipient = findField(lines, "Fee recipient");
    const alignment = findField(lines, "Alignment");
    const endorsement = findField(lines, "Endorsement evidence") ?? "";
    if (alignment && /\bself-launched\b/i.test(alignment) && partiesDiffer(launcher, feeRecipient) && !/same official party|same controller|controlled by|deployer control|wallet control/i.test(endorsement)) {
      findings.push("Alignment says `self-launched` while launcher/deployer and fee recipient differ without explicit shared-control proof.");
    }
  }

  const liquidity = findField(lines, "Liquidity");
  if (liquidity && /\bunknown\b/i.test(liquidity) && sourceTrace && /Dexscreener exact|exact DEX|token-pair/i.test(sourceTrace) && !/\b(no pair|no match|unavailable|blocked|failed|empty)\b/i.test(sourceTrace)) {
    findings.push("Liquidity is unknown even though source trace says exact DEX data was checked without a stated blocker.");
  }

  return findings;
}

function findField(lines, label) {
  const pattern = new RegExp(`^-\\s*${escapeRegExp(label)}\\s*:\\s*(.*)$`, "i");
  return lines.find((line) => pattern.test(line)) ?? null;
}

function isBadSourceLine(line) {
  const value = line.replace(/^-?\s*[^:]+:\s*/, "").trim();
  if (isBlank(value)) return true;
  if (/^\([^)]*\)$/.test(value)) return true;
  if (/^(official|active org|verified|via search|n\/a|tbd|unknown)$/i.test(value)) return true;

  const concrete =
    /https?:\/\//i.test(value) ||
    /(^|[\s(;])@[a-z0-9_]{2,}/i.test(value) ||
    /\b(not found|none found|unavailable|blocked|private|closed-source|no public|not exposed|not applicable|no repo|no github)\b/i.test(value);

  return !concrete;
}

function isBlankValue(line, label) {
  const value = line.replace(new RegExp(`^-\\s*${escapeRegExp(label)}\\s*:\\s*`, "i"), "").trim();
  return isBlank(value);
}

function isBlank(value) {
  return value === "" || value === "-" || value === "()" || /^\(\s*\)$/.test(value);
}

function sourceTraceClaimsConcreteSource(sourceTrace, sourceType) {
  const lower = sourceTrace.toLowerCase();
  if (sourceType === "website") return /\b(website|docs?|link extraction)\b/.test(lower) && /\b(confirmed|verified|extracted|found)\b/.test(lower);
  if (sourceType === "x") return /\b(x|twitter|social)\b/.test(lower) && /\b(confirmed|verified|extracted|found)\b/.test(lower);
  if (sourceType === "github") return /\b(github|repo|code)\b/.test(lower) && /\b(confirmed|verified|extracted|found|inspected)\b/.test(lower);
  return false;
}

function partiesDiffer(launcher, feeRecipient) {
  if (!launcher || !feeRecipient) return false;

  const launcherIds = extractPartyIds(launcher);
  const feeRecipientIds = extractPartyIds(feeRecipient);
  if (launcherIds.length === 0 || feeRecipientIds.length === 0) return false;

  return !launcherIds.some((id) => feeRecipientIds.includes(id));
}

function extractPartyIds(line) {
  return [
    ...line.matchAll(/0x[a-f0-9]{6,40}/gi),
    ...line.matchAll(/@[a-z0-9_]{2,}/gi),
  ].map((match) => match[0].toLowerCase());
}

function printFinding(file, label, finding) {
  console.error(`${file} ${label}: ${finding}`);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

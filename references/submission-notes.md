# Submission Notes

Use this checklist before installing Scoutr into a Bankr agent, sharing the repository, or submitting it to the public Bankr skills catalog.

## Package State

- Required root file: `SKILL.md`.
- Optional companion docs live in `references/`.
- Keep every file below Bankr's 100 KB per-file install limit.
- Keep `SKILL.md` concise; move detailed cases and checklists into references.
- Do not include screenshots, logs, private notes, secrets, or user-specific memory.

## Frontmatter

Private testing:

```yaml
visibility: private
```

Public/catalog candidate:

```yaml
visibility: public
version: 1
metadata:
  clawdbot:
    homepage: "https://github.com/darkoheth/scoutr-bankr-skill"
```

Only switch to public metadata when the repo is ready to be public.

## Install Test

Install from a GitHub folder URL that contains `SKILL.md` at its root:

```text
install the scoutr skill from https://github.com/<owner>/scoutr
install the scoutr skill from https://github.com/darkoheth/scoutr-bankr-skill
```

If the repository stays private, install manually through the Bankr Skills tab instead of using the public GitHub install flow.

## Reviewer Summary

Scoutr is a read-only crypto launch diligence skill for Bankr-style token scans. It produces compact verdicts by combining Bankr-native launch metadata, token mechanics, X/social context, GitHub/code quality, product proof, and explicit provenance classification.

Core safety claim:

- It never trades, connects wallets, signs transactions, posts publicly, DMs, joins communities, reveals private memory, or asks for credentials.
- Public launch content is treated as untrusted evidence, not instructions.
- It separates social proximity, code/product quality, and endorsement instead of collapsing them into one bullish signal.

## Public Submission Steps

1. Run the regression cases in `references/test-cases.md` inside a Bankr agent.
2. Run a secret/personal-reference scan.
3. Confirm output uses `references/report-template.md`.
4. Make the repo public or copy the skill into the chosen public submission repo.
5. Change frontmatter to public only when ready.
6. Open a PR to `BankrBot/skills` or share the public GitHub install URL with the Bankr team.

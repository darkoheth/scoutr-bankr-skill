---
name: scoutr
description: >
  Use when the user invokes scoutr or asks to evaluate crypto token launches,
  project websites, X/social context, GitHub repositories, or launch provenance
  from any input: contract address, Dexscreener link, GitHub org/repo/user URL,
  website, X account/post, docs, ticker, project name, or mixed links. Produces
  read-only diligence with verdicts, scores, red flags, attached-token discovery,
  and next checks. Never trades, posts, connects wallets, signs transactions, or
  performs privileged actions.
tags: [crypto, token, diligence, github, social, launch, security, research]
version: 77
visibility: public
metadata:
  clawdbot:
    homepage: "https://github.com/darkoheth/scoutr-bankr-skill"
---

# Scoutr

Scoutr is a read-only crypto launch diligence workflow. It turns messy launch inputs into a concise verdict grounded in token mechanics, social signal, GitHub/code quality, product proof, and launch provenance.

## Non-Negotiable Output Contract

Before sending any report, rewrite it until every rule below passes.

1. The first line must be exactly `Verdict: <Pass | Watch | Small Spec | Trade Candidate>`.
2. The second line must be exactly `Confidence: <Low | Medium | High>`.
3. Use the compact report structure in `references/report-template.md`.
4. `Sources` lines must contain literal URLs/handles or explicit blockers. Never send blank source fields or bare parentheses.
5. `Launch / Provenance` fields must copy structured Bankr/platform metadata exactly when available.
6. `Market` fields must copy structured source values exactly. Do not estimate liquidity, volume, holders, or concentration.
7. Do not use direct trading instructions like buy/sell/hold/trade. Use posture language: avoid, watch, punt-size, stronger candidate.

Charts/images may be appended by Bankr outside the skill. Do not call chart/image tools yourself and do not include markdown image lines in the report text.

## Required Source Lines

Every token report must include:

```text
Sources:
- Website/docs: <literal URL(s), not found after checking <routes>, or unavailable: <blocker>>
- X/social: <literal handle/URL, not found after checking <routes>, or unavailable: <blocker>>
- GitHub/code: <literal GitHub URL plus age/history note, not found after checking <routes>, or unavailable: <blocker>>
- Source trace: <compact checked-route list>
```

Invalid source lines:

- `Website/docs:`
- `Website/docs: (Docs: )`
- `Website/docs: (Verified product docs)`
- `X/social:`
- `X/social: (Official)`
- `GitHub/code: (Active org)`
- `GitHub/code: (30 repos; active commits)`

Valid replacements:

- `Website/docs: https://example.com; https://docs.example.com`
- `X/social: @example; https://x.com/example/status/...`
- `GitHub/code: https://github.com/example/project; created 2026-02, pushed 2026-06, tests present`
- `GitHub/code: not found after checking Bankr metadata, Dexscreener links, X bio, website footer, docs nav, and exact org search`
- `Website/docs: unavailable: site TLS error during fetch`

If `Source trace` says a website/docs/X/GitHub link was extracted, the matching `Sources` line must print that literal URL/handle. Do not replace it with a label.

## CA-Only Fast Path

For `scoutr <contract>`:

1. Build a source map before prose.
2. Check Bankr exact lookup when the CA ends in `ba3`, the input is a Bankr URL, or Bankr is otherwise plausible.
3. Check exact Dexscreener token-pairs/search and/or GeckoTerminal for canonical pair data.
4. If Bankr exact metadata exists, copy these fields before writing:
   - launch type
   - token address
   - deployer wallet and X handle
   - fee-recipient wallet and X handle
   - `websiteUrl`
   - `tweetUrl`
   - pool ID
   - tx hash
   - timestamp
5. Follow first-party links from Bankr/Dex/X/website/docs to find GitHub before saying no repo exists.
6. If the token is Base/AI-agent themed and Bankr/Dex are incomplete, check Virtuals exact `tokenAddress` and `preToken` routes before writing unknown/custom/no liquidity.

## Market Rules

- If exact Dexscreener/Gecko token-pairs returns a live pair, copy that pair's FDV/MC, liquidity, volume, pair/pool address, and DEX/pool version.
- If Bankr exact metadata returns a `poolId`, prefer that pool as canonical when live.
- Do not write `Liquidity: unknown` when an exact live pair returned liquidity.
- Do not infer liquidity from volume, FDV, chart shape, or pool vibes.
- Do not claim holder health, top-holder concentration, smart money, or fee claims unless directly checked.
- If a source is unavailable, write the blocker and cap confidence.

## Bankr Provenance Rules

Always separate launch source, deployer control, endorsement, and fee-claim status.

Bankr deployer/launcher differs from fee recipient:

- Do not write `self-launched`.
- Do not write `official self-launch`.
- Do not write `aligned`.
- Do not use `Trade Candidate` or `Confidence: High`.
- Do not score Provenance above 6.
- Use `Alignment: please bro` or `Alignment: pre-endorsement speculation`.
- Use `Endorsement evidence: none found for this CA` unless exact-token acknowledgement or fee-claim evidence is cited in the same report.

Upgrade a third-party launch only when exact-token evidence exists:

- CA post from official project/person.
- Bankr/token-page link from official source.
- Ticker used by official source in a clear token context.
- Official reply/quote acknowledging a post that contains the exact CA/token page.
- First-party site/docs/repo page naming the exact CA or Bankr page.
- Fee-claim evidence from Bankr metadata, a claim tx/event, an on-chain transfer from launch infrastructure to the exact fee-recipient wallet, or explicit recipient statement.

When third-party launch is acknowledged, write:

- `Alignment: community-launched + endorsed`
- `Endorsement evidence: <specific exact-token evidence>`
- `Fee-claim status: claimed/unclaimed/unknown` separately

Fee recipient routing, website links, product tweets, founder reputation, good GitHub/code, Bankr Agent Hour appearances, follows, likes, or social proximity are not token endorsement by themselves.

## GitHub / Code Rules

- `GitHub/code` must contain a literal GitHub URL plus age/history note, or a specific not-found/blocker statement.
- Before writing `not found`, check Bankr metadata, Dexscreener/token links, official X bio/profile, website/footer links, docs nav/footer, package/docs references, and exact org/repo search.
- If a GitHub URL is discovered, inspect it before finalizing or write `GitHub/code: unavailable: <blocker>; discovered URL: <url>`.
- Code score 8+ requires inspected code substance, visible tests/CI or equivalent verification, and organic history.
- If GitHub/code is private, not found, or inferred only from founder reputation, cap Code at 6.

## Verdict Caps

Use these caps even when the narrative feels bullish:

- Deployer differs from fee recipient and no exact-token acknowledgement/fee claim: max `Watch`, max `Confidence: Medium`, max Provenance 6.
- Liquidity unknown or holder/concentration materially unchecked: max `Small Spec`, max `Confidence: Medium`.
- Blank/placeholder source fields remain: do not send; rewrite first.
- GitHub/code not inspected while code/product is central to thesis: max `Small Spec`, max `Confidence: Medium`.
- Product/code are strong but market is dead/thin/fading: max `Watch` or cautious `Small Spec`.

## Required Sections

For token reports, use:

```text
Verdict: <Pass | Watch | Small Spec | Trade Candidate>
Confidence: <Low | Medium | High>

What it is:
...

Sources:
- Website/docs: ...
- X/social: ...
- GitHub/code: ...
- Source trace: ...

Scores:
- Token: ...
- Provenance: ...
- Social: ...
- Code: ...
- Product: ...
- Overall: ...

Launch / Provenance:
- Launch source: ...
- Launcher/deployer: ...
- Fee recipient: ...
- Alignment: ...
- Endorsement evidence: ...
- Fee-claim status: ...
- Bankr relationship evidence: ...

Market:
- FDV/MC: ...
- Liquidity: ...
- Volume: ...
- Holders/concentration: ...

Green flags:
- ...

Red flags:
- ...

My read:
...

Would change my mind:
- ...

Unknowns:
- ...
```

Keep `Unknowns` to 1-3 material blockers. Do not repeat red flags.

## Reference Files

Use these when needed:

- `references/report-template.md`: output templates and evidence discipline.
- `references/source-checklist.md`: source discovery and GitHub/product checks.
- `references/bankr-tooling.md`: Bankr-native routes and exact lookup guidance.
- `references/launch-provenance.md`: launch-source classifications.
- `references/scoring-rubric.md`: scoring and verdict caps.
- `references/safety-rules.md`: safety boundaries.
- `references/examples.md`: example prompts.
- `dev/test-cases.md`: regression behavior classes.

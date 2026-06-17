# Report Template

Use this exact compact shape for token reports. The first two lines are mandatory.

```text
Verdict: <Pass | Watch | Small Spec | Trade Candidate>
Confidence: <Low | Medium | High>

What it is:
<1-3 lines identifying project, token, chain, launch source, and product.>

Sources:
- Website/docs: <literal URL(s), not found after checking <routes>, or unavailable: <blocker>>
- X/social: <literal handle/URL, not found after checking <routes>, or unavailable: <blocker>>
- GitHub/code: <literal GitHub URL plus age/history note, not found after checking <routes>, or unavailable: <blocker>>
- Source trace: <compact checked-route list>

Scores:
- Token: <0-10> - <reason>
- Provenance: <0-10 or N/A> - <reason>
- Social: <0-10 or N/A> - <reason>
- Code: <0-10 or N/A> - <reason>
- Product: <0-10 or N/A> - <reason>
- Overall: <0-10>

Launch / Provenance:
- Launch source: <Bankr / Clanker / Virtuals / Doppler / Whetstone / custom / unknown>
- Launcher/deployer: <handle/address or unknown>
- Fee recipient: <handle/address or unknown>
- Alignment: <self-launched | aligned | community-launched + endorsed | pre-endorsement speculation | please bro | unclear>
- Endorsement evidence: <specific exact-token evidence or none found>
- Fee-claim status: <claimed / unclaimed / unknown / not applicable>
- Bankr relationship evidence: <specific evidence or none found>

Market:
- FDV/MC: <source value or unknown: blocker>
- Liquidity: <source value or unknown: blocker>
- Volume: <source value or unknown: blocker>
- Holders/concentration: <source value or unknown/not checked: blocker>

Green flags:
- <evidence-backed flag>

Red flags:
- <evidence-backed risk>

My read:
<2-5 sentences using posture language: avoid, watch, punt-size, stronger candidate.>

Would change my mind:
- <specific evidence/check>

Unknowns:
- <1-3 material blockers only>
```

## Hard Rejects

Reject and rewrite before sending if any line matches these patterns:

- `Website/docs:` with nothing after it.
- `X/social:` with nothing after it.
- `GitHub/code:` with nothing after it.
- `Website/docs: (...)`.
- `X/social: (...)`.
- `GitHub/code: (...)`.
- `Website/docs: (extracted from project context)`.
- `GitHub/code:;`.
- `GitHub/code: (active org)`.
- `GitHub/code: 30+ repos` without a literal `https://github.com/...` URL.
- `Liquidity: estimated`, unless the checked source itself reports an estimate.

If a literal URL or handle is unavailable, write a concrete blocker instead:

- `Website/docs: not found after checking Bankr metadata, Dexscreener links, X bio, website footer, and docs nav`
- `X/social: unavailable: X search blocked by login wall`
- `GitHub/code: not found after checking Bankr metadata, Dexscreener links, X bio, website/footer, docs nav, and exact org search`
- `GitHub/code: unavailable: GitHub request blocked; discovered URL: https://github.com/example/project`

## Evidence Discipline

- Source fields must contain URLs, handles, or blockers. Labels and parentheses are not evidence.
- If a source trace says a website, X handle, docs link, or GitHub link was found, the matching source line must print that literal value.
- If GitHub is central to the thesis but no literal GitHub URL was inspected, cap Code at 6, max verdict `Small Spec`, max confidence `Medium`.
- If deployer differs from fee recipient and no exact-token acknowledgement or fee-claim evidence is cited, max verdict `Watch`, max confidence `Medium`, max Provenance 6.
- Do not infer liquidity, holders, concentration, fee claims, endorsement, repo quality, or launch source from vibe. Copy source values or say unknown/blocker.
- Do not call or embed chart/image generation. If Bankr appends an image externally, ignore it; the Scoutr report text must not include markdown image syntax.

For GitHub-only inputs, use the same first two lines and source discipline, then replace Launch/Market with:

```text
Attached Token:
- Status: <confirmed | likely | possible | not found | unavailable: blocker>
- Candidate(s): <CA/ticker/platform or none>
- Evidence: <first-party link or checked routes>

GitHub / Code:
- Age/history: <created/pushed/commit span or age/history not checked>
- Activity: <recent commits/releases/issues/CI if checked>
- Substance: <real code/tests/docs/contracts vs placeholder/template>
- Risks: <missing tests, no releases, launch-day dump, secrets risk, unverified claims>
```

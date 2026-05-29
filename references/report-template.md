# Report Template

Use this compact structure by default. Keep the headings stable so repeated scans are easy to compare.

```text
Verdict: <Pass | Watch | Small Spec | Trade Candidate>
Confidence: <Low | Medium | High>

What it is:
<1-3 lines identifying project, token, chain, launch source, site/social/repo if known.>

Scores:
- Token: <0-10> - <one-line reason>
- Provenance: <0-10 or N/A> - <launch source, deployer/recipient alignment, endorsement status>
- Social: <0-10 or N/A> - <one-line reason>
- Code: <0-10 or N/A> - <one-line reason>
- Product: <0-10 or N/A> - <one-line reason>
- Overall: <0-10>

Bankr / Provenance:
- Launch source: <Bankr / Clanker / Doppler / Whetstone / Uniswap v4 / custom / unknown>
- Launcher/deployer: <handle/address if known>
- Fee recipient: <handle/address if known>
- Alignment: <self-launched | endorsed | pre-endorsement speculation | please bro | unclear>
- Endorsement evidence: <CA post / token-page link / fee claim / clear acknowledgement / none found>

Market:
- FDV/MC: <value or unknown>
- Liquidity: <value or unknown>
- Volume: <24h and shorter window if useful>
- Holders/concentration: <count, top holders if known>

Green flags:
- <flag grounded in evidence>
- <flag grounded in evidence>
- <flag grounded in evidence>

Red flags:
- <risk grounded in evidence>
- <risk grounded in evidence>
- <risk grounded in evidence>

My read:
<2-5 sentences with practical posture. Mention whether this is avoid, watchlist, punt-size, or stronger candidate.>

Would change my mind:
- <specific evidence/check>
- <specific evidence/check>

Unknowns:
- <what could not be verified>
```

For non-token or GitHub-only requests, omit irrelevant sections but keep `Verdict`, `Confidence`, `Scores`, `My read`, `Would change my mind`, and `Unknowns`.

For deeper reports, add short sections only when they add decision value:

- Token / Contract
- Launch / Provenance
- Fee Recipient / GitHub
- GitHub Age / History
- Social / X
- GitHub / Code
- Website / App
- Source Links

Keep output concise. Do not bury the verdict. Do not tell the user to buy, sell, hold, or trade; use posture language such as `avoid`, `watch`, `punt-size only`, or `stronger candidate`.

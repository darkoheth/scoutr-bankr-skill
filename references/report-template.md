# Report Template

Use this compact structure by default. Keep the headings stable so repeated scans are easy to compare.

Return this template exactly once. Do not repeat the full report, append a duplicate, or restate the same sections after the first completed report.

```text
Verdict: <Pass | Watch | Small Spec | Trade Candidate>
Confidence: <Low | Medium | High>

What it is:
<1-3 lines identifying project, token, chain, launch source, site/social/repo if known.>

Sources:
- Website/docs: <URL, not found after checking X/token/Bankr/docs links, or unavailable with blocker>
- X/social: <URL/handle, not found after checking token/Bankr/site links, or unavailable with blocker>
- GitHub/code: <URL plus age/history note, not found after checked sources, or unavailable with blocker>
- Source trace: <Dexscreener exact CA checked; Bankr exact lookup checked; Virtuals exact lookup checked when Bankr/Dex are empty or AI-agent context suggests it; Dex links followed or empty; social/platform fallback checked when needed; first-party website/docs/X/GitHub links followed or blocker>

Scores:
- Token: <0-10> - <one-line reason>
- Provenance: <0-10 or N/A> - <launch source, deployer/recipient alignment, endorsement status>
- Social: <0-10 or N/A> - <one-line reason>
- Code: <0-10 or N/A> - <one-line reason>
- Product: <0-10 or N/A> - <one-line reason>
- Overall: <0-10>

Launch / Provenance:
- Launch source: <Bankr / Clanker / Virtuals / Doppler / Whetstone / Uniswap v4 / custom / unknown>
- Launcher/deployer: <handle/address if known>
- Fee recipient: <handle/address if known>
- Alignment: <self-launched | aligned | community-launched + endorsed | pre-endorsement speculation | please bro | unclear>
- Endorsement evidence: <CA post / token-page link / fee claim / clear acknowledgement / none found>
- Fee-claim status: <claimed / unclaimed / unknown / not applicable>
- Bankr relationship evidence: <Agent Hour / Bankr-team post / social engagement / none found / unknown>
- Platform status: <Virtuals UNDERGRAD/AVAILABLE/etc. when applicable, otherwise omit or N/A>

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

## Evidence Discipline

- Use `unknown`, `not checked`, or `not found` instead of estimating unavailable market or holder fields.
- Do not infer liquidity from volume/market-cap ratios or from "typical" Doppler/Bankr pools.
- Do not claim top-holder quality, `smart money`, source verification, repo absence, or product catalysts unless directly checked.
- Do not put the token CA in the launcher/deployer field unless a source explicitly says the token contract is also the deployer. Use `unknown` for missing launcher/deployer.
- For Bankr launches, `self-launched`, `aligned`, `community-launched`, and `endorsed` are not interchangeable. Use `self-launched` only when the official project/person directly launched/deployed the token. Use `aligned` when launcher/deployer and fee recipient appear controlled by the same official project/person but direct self-launch evidence is unclear. If a community/third-party account launched it and the official project later acknowledged the token, call it `community-launched + endorsed`, not self-launched or aligned.
- Endorsement evidence and fee-claim status are separate fields. If the project/dev publicly posts or acknowledges the CA but has not claimed fees, write `Alignment: community-launched + endorsed`, `Endorsement evidence: <specific post/link/acknowledgement>`, and `Fee-claim status: unclaimed/unknown`.
- `Official (Bankr deployment)` is not valid endorsement evidence. Bankr deployment only establishes launch source; project endorsement requires project/dev/fee-recipient token acknowledgement.
- Treat Bankr Agent Hour or Bankr-hosted event evidence as relationship/context evidence, not automatic token endorsement unless the event/post explicitly mentions the token or launch.
- Do not use `endorsed please bro` as a final alignment label. Before endorsement it is `please bro` or `pre-endorsement speculation`; after clear target/project acknowledgement it becomes `community-launched + endorsed`.
- Do not mark `Fee-claim status: claimed` from a launch tweet, website link, Agent Hour, or token acknowledgement. Claimed requires direct fee-claim evidence from Bankr metadata, a claim transaction/event, or explicit recipient claim.
- If GitHub/code is mentioned, include a concrete age/history note or say `age/history not checked`.
- Before reporting `GitHub: none found`, follow first-party links from Dexscreener/token metadata, Bankr page, official X bio, website, docs nav/footer, and package/docs references.
- For CA-only scans, structured token metadata must be checked before `not found`: Dexscreener exact CA search and token-pairs endpoints when available, then Bankr launch metadata/page, then official website/docs/X links.
- For Bankr CA scans, Bankr exact lookup (`api.bankr.bot/token-launches/search?q=<contract>`) should populate deployer, fee recipient, website URL, tweet URL, and launch timestamp when available.
- If Bankr exact lookup returns `exactMatch`, the Bankr/Provenance section must use those exact fields. Do not replace them with `N/A`, `unknown`, `custom`, or `standard ERC-20` because a later explorer/search result uses generic wording.
- If the CA ends in `ba3`, treat Bankr/Doppler as a strong candidate and check Bankr exact/page metadata before any custom classification.
- If the CA ends in `b07`, treat Clanker as a strong candidate after Bankr exact/page no-match. Some older Bankr launches also end in `b07`, so Bankr exact metadata wins. If verified source/name is `ClankerToken`, Clanker route/tooling resolves, or other Clanker evidence exists, write `Launch source: Clanker / Uniswap v4` instead of `Uniswap v4 (Custom)`.
- If Bankr and Dexscreener are empty for a Base AI-agent-style token, check Virtuals exact `tokenAddress` and `preToken` routes before reporting launch source unknown. A Virtuals `UNDERGRAD` record is launch provenance and should be reported as Virtuals pre-token/pre-bonding, even if Dexscreener has no pair.
- For fresh pairs with empty Dexscreener metadata, inspect Bankr `websiteUrl`/`tweetUrl`/`metadataUri` and the fee recipient X bio/profile links before writing `not found` for website/docs/X/GitHub.
- If a GitHub URL is found from any first-party route, inspect it before finalizing. Do not list `check GitHub` as a next step unless no GitHub URL was discoverable or the runtime explicitly could not inspect it.
- If inspection is blocked, write `GitHub inspection unavailable: <reason>; discovered URL: <url>`.
- Use a latency guard on CA-only scans. Do not hang the report on large Framer/Next/Vite bundles, social login walls, Discord/Telegram pages, large media assets, or exhaustive website crawls. Record the blocker in `Sources`, `Source trace`, or `Unknowns`, then return the best evidence-backed report.
- Never leave `Website/docs`, `X/social`, or `GitHub/code` blank. Blank source fields hide failed retrieval. Use a URL, `not found after checking <sources>`, or `unavailable: <blocker>`.
- If using separate `Website:` and `Docs:` lines instead of the combined template field, the same no-blank rule applies to each line.
- Before sending, reject the draft if it says source links were not found but structured token metadata, Bankr exact lookup, or a discovered website/docs route was not checked. Retry the lookup or state the exact blocker.
- The `Source trace` line is a compact audit trail, not a long research log. Its job is to make missing-source failures obvious before the report ships.

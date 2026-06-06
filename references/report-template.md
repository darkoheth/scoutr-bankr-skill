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
- <1-3 material blockers that remain after checked routes; omit this section if there are no meaningful unresolved blockers>
```

For GitHub-only requests, start with repo/code quality and then include attached-token discovery. Use this compact shape:

Keep this shape compact enough for one Bankr turn. If token discovery is weak or inconclusive, do not launch a full token-provenance deep dive; report the weak lead and stop.

```text
Verdict: <Pass | Watch | Small Spec | Trade Candidate>
Confidence: <Low | Medium | High>

What it is:
<1-3 lines identifying GitHub repo/org, product, and whether a token appears attached.>

Sources:
- GitHub/code: <repo/org URL plus age/history note>
- Repo scan: <score plus metadata/activity/substance/similarity/secret-risk summary>
- Website/docs: <repo homepage/docs, not found after checking repo/profile links, or unavailable with blocker>
- X/social: <handle/link, not found after checking repo/profile/site links, or unavailable with blocker>
- Source trace: <GitHub URL checked; repo scanner used; README/docs/package/profile/homepage links checked; token candidate routes checked; Dexscreener/Bankr/Clanker/Virtuals checked if a token candidate was found>

Scores:
- Code: <0-10> - <repo age/activity/quality reason>
- Product: <0-10 or N/A> - <website/docs/app proof reason>
- Social: <0-10 or N/A> - <social/project signal reason>
- Token: <0-10 or N/A> - <attached-token reason or no token found>
- Provenance: <0-10 or N/A> - <attached-token launch/source confidence>
- Overall: <0-10>

Attached Token:
- Status: <confirmed | likely | possible | not found | unavailable: blocker>
- Candidate(s): <CA/ticker/platform or none>
- Evidence: <first-party link, token page, repo docs, website/social link, or checked routes>

GitHub / Code:
- Age/history: <created/pushed/commit span/contributor note>
- Repo scan: <score, metadata/activity/substance/similarity/secret-risk summary>
- Activity: <recent commits/releases/issues/CI if checked>
- Substance: <real code/tests/docs/contracts vs placeholder/template>
- Risks: <missing tests, no releases, launch-day dump, secrets risk, unverified claims>

My read:
<2-5 sentences with practical posture. If a token is found, separate repo quality from token risk.>

Would change my mind:
- <specific repo/product/token evidence/check>

Unknowns:
- <1-3 material blockers that remain after checked routes; omit this section if there are no meaningful unresolved blockers>
```

For other non-token requests, omit irrelevant sections but keep `Verdict`, `Confidence`, `Scores`, `My read`, `Would change my mind`, and `Unknowns`.

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

- Run a pre-send contradiction check before returning: if deployer/launcher differs from fee recipient and direct deployer-control proof is not cited, the report must not say `self-launched`, `official self-launch`, `direct alignment`, `founder-linked wallet`, `Provenance: 8+`, `Trade Candidate`, or `Confidence: High`.
- Source fields must include literal URLs or handles, not empty markdown labels or bare parentheses. Failed source lines include `Website/docs: (Verified docs)`, `X/social: (Official)`, `X/social: (Founder)`, and `GitHub/code: (Active repo)`. Use actual links/handles or an explicit blocker.
- The pre-send contradiction check must downgrade and return; it must not cause indefinite searching. If proof is missing after the core source map, say `none found` or `unknown`, cap the report, and ship.
- Product, app, repo, founder, or company announcements are not token launch tweets unless the checked post contains or directly links the exact CA, Bankr/token page, ticker-as-token, or fee claim. Write `product tweet` / `product evidence`, not `launch tweet`, for product-only posts.
- Fee claims require direct evidence. Never write `likely claimed`; write `claimed` only with Bankr metadata, claim tx/event, launch-infrastructure transfer to the fee-recipient wallet, or explicit recipient claim. A founder CA post, social endorsement, Agent Hour appearance, or community rally is not fee-claim evidence. Otherwise use `unknown` or `unclaimed` with source basis.
- Deployer and fee-recipient fields must be copied from structured Bankr/explorer metadata. Do not substitute the token contract, pool address, holder wallet, fee-recipient wallet, or inferred founder wallet as `Launcher/deployer`.
- Use `unknown`, `not checked`, or `not found` instead of estimating unavailable market or holder fields.
- For holder count, include source and timestamp/age when available, especially on launches under 24h old. On active Bankr/Base launches, do not rely on Blockscout as the primary holder-count source; prefer a live market/launch indexer and use Blockscout for tx/source/wallet evidence. Do not call holders `extremely low`, `pre-distribution`, or highly concentrated from an old/stale count; re-check or write `holders: stale/unverified` / `holders: source conflict`.
- Keep `Unknowns` short and decision-oriented. Default to 1-3 bullets. Do not repeat Red flags or Would-change-my-mind items, and do not list every generic diligence check that could be done later.
- If market data is unavailable across multiple fields, collapse it into one compact blocker such as `Market depth/holders unavailable from checked sources`, not separate bullets for liquidity, lock status, holder distribution, developer allocation, and taxes.
- If product/app behavior was not inspected, state that in Product or Red flags as `product proof limited to landing/docs`; do not repeat it as a generic Unknown unless it is the main reason the verdict is capped.
- Do not infer liquidity from volume/market-cap ratios or from "typical" Doppler/Bankr pools.
- Do not write liquidity ranges as estimates. A range is acceptable only if the checked source itself reports a range; otherwise copy the checked value or write `unknown`.
- Copy live FDV, liquidity, volume, and holder count from the selected structured source. Do not replace checked values with rounded/estimated chart values; if sources conflict, cite the freshest source and lower confidence.
- Do not claim top-holder quality, `smart money`, source verification, repo absence, or product catalysts unless directly checked.
- Do not claim `launch tweet verified` from an X profile URL, project account URL, or generic social link. Only a specific checked post that mentions the token, ticker, CA, Bankr/token page, or launch can be called a launch tweet or endorsement post.
- Do not borrow GitHub metrics or brand trust from adjacent projects. If the token/site/docs links one repo, use stars/forks/history from that exact repo. A project saying it is compatible with Hermes/Nous/OpenClaude/MCP/x402/gitlawb does not make it official, endorsed, or owned by those teams.
- Do not claim a deployer/founder works for a company, lab, or protocol unless a checked first-party source states the relationship.
- Do not put the token CA in the launcher/deployer field unless a source explicitly says the token contract is also the deployer. Use `unknown` for missing launcher/deployer.
- For Bankr launches, `self-launched`, `aligned`, `community-launched`, and `endorsed` are not interchangeable. Use `self-launched` only when the official project/person directly launched/deployed the token. Use `aligned` when launcher/deployer and fee recipient appear controlled by the same official project/person but direct self-launch evidence is unclear. If a community/third-party account launched it and the official project later acknowledged the token, call it `community-launched + endorsed`, not self-launched or aligned.
- Endorsement evidence and fee-claim status are separate fields. If the project/dev publicly posts or acknowledges the CA but has not claimed fees, write `Alignment: community-launched + endorsed`, `Endorsement evidence: <specific post/link/acknowledgement>`, and `Fee-claim status: unclaimed/unknown`.
- Do not treat a fee-recipient-authored Bankr `tweetUrl` as proof of `self-launched` when the deployer wallet is different. It is endorsement evidence; the alignment remains `community-launched + endorsed` unless deployer control is proven.
- `Official (Bankr deployment)` is not valid endorsement evidence. Bankr deployment only establishes launch source; project endorsement requires project/dev/fee-recipient token acknowledgement.
- Treat Bankr Agent Hour or Bankr-hosted event evidence as relationship/context evidence, not automatic token endorsement unless the event/post explicitly mentions the token or launch.
- Do not use `endorsed please bro` as a final alignment label. Before endorsement it is `please bro` or `pre-endorsement speculation`; after clear target/project acknowledgement it becomes `community-launched + endorsed`.
- Do not mark `Fee-claim status: claimed` from a launch tweet, website link, Agent Hour, or token acknowledgement. Claimed requires direct fee-claim evidence from Bankr metadata, a claim transaction/event, an on-chain fee-recipient transfer from launch infrastructure, or explicit recipient claim.
- Do not mark `Alignment: community-launched + endorsed` or write official endorsement when the only evidence is Bankr fee-recipient routing, a fee-recipient X handle/wallet, a Bankr website URL, or project/social/profile linkage. Fee recipient means potential beneficiary, not token acknowledgement.
- `Endorsement evidence` must name explicit token acknowledgement evidence or say `none found`. Valid evidence includes fee claim, CA post, ticker/token post, Bankr/token-page link, first-party repo/docs/site pages naming the exact CA or Bankr page, or clear acknowledgement of the exact token from an official channel.
- If GitHub/code is mentioned, include a concrete age/history note or say `age/history not checked`.
- Code scores need visible evidence. A repo URL, active commits, multiple contributors, docs, or project structure is not enough for Code 8+. Use 8+ only when inspected code substance, tests/CI or equivalent verification, and organic pre-launch history are all present. Same-day/launch-week repos normally cap at 4, or 6 if meaningful code was inspected but history/tests remain thin.
- If Code, liquidity, holder concentration, or provenance alignment is materially unchecked, do not return High confidence or `Trade Candidate`; cap the posture and say what evidence would unlock the higher score.
- If holder count changes materially between sources or contradicts trade activity, report the freshest non-stale source and downgrade confidence until top-holder distribution is checked.
- Use Scoutr's built-in repo scanner as the GitHub/code signal. Do not call external paid repo scanners or payment-gated scan APIs.
- For GitHub-only inputs, do not stop at repo analysis. Check README/docs/package/homepage/profile links and exact repo/org/package/domain searches for an attached token. If no token is found, write `Attached Token: not found` plus checked routes.
- Do not attach a token to a repo from ticker/name similarity alone. Use `possible` for weak matches, `likely` for multiple first-party signals, and `confirmed` only for direct first-party CA/token links or bidirectional repo/token-page linkage.
- Before reporting `GitHub: none found`, follow first-party links from Dexscreener/token metadata, Bankr page, official X bio, website, docs nav/footer, and package/docs references.
- Website/source checks must include raw link extraction, not only page text summarization. If the site has `github.com` anywhere in `href` links, footer links, page HTML, or extracted link lists, report that GitHub URL and inspect it or name the blocker.
- For CA-only scans, structured token metadata must be checked before `not found`: Dexscreener exact CA search and token-pairs endpoints when available, then Bankr launch metadata/page, then official website/docs/X links.
- For Bankr CA scans, Bankr exact lookup (`api.bankr.bot/token-launches/search?q=<contract>`) should populate deployer, fee recipient, website URL, tweet URL, and launch timestamp when available.
- If Bankr exact lookup returns `exactMatch`, the Bankr/Provenance section must use those exact fields. Do not replace them with `N/A`, `unknown`, `custom`, or `standard ERC-20` because a later explorer/search result uses generic wording.
- If the input includes a `bankr.bot/launches/<contract>` URL, extract that contract and query the exact Bankr API. The Bankr page URL itself is strong evidence that Bankr provenance should be resolved or marked unavailable with a tool/app-shell blocker, not silently treated as no-match.
- For `...ba3` CAs, retry Bankr exact lookup with normalized lowercase/input casing before writing no-match. Bankr/Doppler is the expected first candidate for newer `ba3` launches.
- Copy Bankr exact URL fields verbatim before synthesis: `websiteUrl` -> `Website/docs`, `tweetUrl` or X usernames -> `X/social` or `Launch tweet`, `metadataUri` -> `Source trace` when useful. A later browse/search failure can add a blocker but cannot blank these fields.
- Do not ship a market-only Bankr report. If Bankr exact lookup returns a website URL, X handle/tweet URL, or metadata URI, the report must include source discovery and GitHub/product findings or explicit blockers. `bankr_deployed` is not enough.
- If the CA ends in `ba3`, treat Bankr/Doppler as a strong candidate and check Bankr exact/page metadata before any custom classification.
- If the CA ends in `b07`, treat Clanker as a strong candidate after Bankr exact/page no-match. Some older Bankr launches also end in `b07`, so Bankr exact metadata wins. If verified source/name is `ClankerToken`, Clanker route/tooling resolves, or other Clanker evidence exists, write `Launch source: Clanker / Uniswap v4` instead of `Uniswap v4 (Custom)`.
- If Bankr and Dexscreener are empty for a Base AI-agent-style token, check Virtuals exact `tokenAddress` and `preToken` routes before reporting launch source unknown. A Virtuals `UNDERGRAD` record is launch provenance and should be reported as Virtuals pre-token/pre-bonding, even if Dexscreener has no pair.
- For fresh pairs with empty Dexscreener metadata, inspect Bankr `websiteUrl`/`tweetUrl`/`metadataUri` and the fee recipient X bio/profile links before writing `not found` for website/docs/X/GitHub.
- If a GitHub URL is found from any first-party route, inspect it before finalizing. Do not list `check GitHub` as a next step unless no GitHub URL was discoverable or the runtime explicitly could not inspect it.
- If inspection is blocked, write `GitHub inspection unavailable: <reason>; discovered URL: <url>`.
- Do not write `GitHub not discoverable via first-party surfaces` unless raw website link extraction, docs/footer extraction, X bio/profile links, and exact org/repo search were all checked or explicitly blocked.
- Before writing `Fee-claim status: unknown` for Bankr/Doppler community launches, inspect recent fee-recipient wallet activity and launch infrastructure transfers when tools permit. Name the blocker if this check cannot be completed.
- Before writing `Fee-claim status: unclaimed`, apply the same on-chain check. `Unclaimed` is an affirmative claim and is wrong if the fee-recipient wallet has already received WETH/USDC/EURC/token transfers from launch infrastructure.
- Before writing `Endorsement evidence: none found` for strong target-project launches, inspect first-party repos/sites/docs for exact CA, Bankr page, `community-token`, token, fees, fund, and claim pages when tools permit. Name the blocker if this check cannot be completed.
- Use a latency guard on CA-only scans. Do not hang the report on large Framer/Next/Vite bundles, social login walls, Discord/Telegram pages, large media assets, or exhaustive website crawls. Record the blocker in `Sources`, `Source trace`, or `Unknowns`, then return the best evidence-backed report.
- Stop after the core source map is complete. For Bankr CA scans, core source map means Bankr exact metadata, primary Dex/Gecko market data, explorer holder/top-holder snapshot or blocker, first-party website/repo/docs link extraction, and endorsement/fee-claim check or blocker. Do not leave a job pending for broad social sentiment, chart generation, or exhaustive transaction tracing once those fields are resolved.
- Never leave `Website/docs`, `X/social`, or `GitHub/code` blank. Blank source fields hide failed retrieval. Use a URL, `not found after checking <sources>`, or `unavailable: <blocker>`.
- For Bankr exact matches, a blank `Website/docs`, `X/social`, or `Launch tweet` field is a hard failure whenever Bankr returned `websiteUrl`, `tweetUrl`, deployer X, or fee-recipient X.
- If using separate `Website:` and `Docs:` lines instead of the combined template field, the same no-blank rule applies to each line.
- If deployer/launcher differs from fee recipient and `Endorsement evidence` is `none found`, reject `Alignment: community-launched + endorsed`, `Verdict: Trade Candidate`, and `Confidence: High`.
- Reject drafts where `Unknowns` is longer than 3 bullets or mostly repeats already-stated risks. Compress to the few blockers that would materially change the verdict.
- Before sending, reject the draft if it says source links were not found but structured token metadata, Bankr exact lookup, or a discovered website/docs route was not checked. Retry the lookup or state the exact blocker.
- Before sending, reject the draft if it has only Stats/Security/Summary and no Launch/Provenance, Sources, GitHub/code, Unknowns, or Source trace for a Bankr exact match.
- The `Source trace` line is a compact audit trail, not a long research log. Its job is to make missing-source failures obvious before the report ships.

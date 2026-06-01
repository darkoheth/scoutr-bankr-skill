# Source Checklist

## Token / Market

- Chain, contract address, ticker, deploy time, verified source, proxy status.
- Liquidity, volume, FDV/market cap, pair age, LP lock/burn status, holder count, top-holder concentration.
- Owner/admin powers: mint, blacklist, pause, fee changes, max tx/wallet, upgradeability.
- Buy/sell viability, honeypot/tax warnings, and trading anomalies when launcher/source is unknown or suspicious.
- Deployer history, related contracts, launch factory/platform, pool manager, router, and migration path.
- Launch mechanics: fair launch, presale, stealth, airdrop, points, claim, mining, emissions, migration.
- Bankr provenance when applicable: Bankr token page URL, launcher/deployer, fee recipient, project/person the token points at, fee claim status if visible, and whether project/social links match the actual recipient.
- Bankr exact lookup: use `https://api.bankr.bot/token-launches/search?q=<contract>` when possible. An `exactMatch` result is stronger than explorer inference and should populate launch source, deployer, fee recipient, tweet URL, website URL, pool ID, tx hash, and timestamp.
- Clanker provenance: `b07` suffix is a strong newer-Clanker hint when Bankr exact lookup has no match. Check Clanker routes/tools and explorer source/name such as `ClankerToken`. Classify as Clanker even if the pool is Uniswap v4; the pool is mechanics, not the launch platform.
- Virtuals exact lookup: for Base AI-agent tokens or when Dexscreener is empty but explorer has a token symbol/name, query Virtuals by exact `tokenAddress` and exact `preToken` before saying launch source is unknown. A matching `preToken` with `status: UNDERGRAD` is Virtuals pre-bonding/pre-token provenance.
- CA-only source recovery: query structured token metadata before generic search. Use Dexscreener exact CA endpoints (`/latest/dex/search?q=<contract>` and `/token-pairs/v1/<chain>/<contract>` when chain is known), select the main pair by real liquidity/volume, then extract `info.websites` and `info.socials`.
- Preserve structured results in a short source map before writing analysis. Required keys are token contract, chain, ticker, canonical pair, Dexscreener websites/socials, Bankr exact launch fields, Clanker evidence when present, Virtuals exact fields when present, fee-recipient/social/profile links, and GitHub candidates. The final report should be copied from this source map for source/provenance fields.
- Do not let a later generic search summary erase structured facts. If Dexscreener exposed a website/docs/X link or Bankr exact lookup exposed a deployer/fee recipient/tweet, those fields stay present in the report unless a mismatch is explicitly found and explained.
- Use a latency guard. Structured API lookups, explorer metadata, HTML metadata, visible links, and small text samples are enough to keep the report moving. Do not crawl Framer/Next/Vite bundles, large media assets, analytics scripts, or every social/platform branch before producing a verdict.
- If a source is slow, huge, JS-heavy, or login-walled, write `unavailable: timeout/large JS page/login wall` for the blocked detail and continue. A partial report with explicit Unknowns is better than no report.
- Keep Unknowns compact. Missing market data, holder concentration, lock status, taxes, and role/admin state can be one combined blocker when none of those routes were available. Do not turn Unknowns into a full audit checklist.
- Empty Dexscreener metadata is common on fresh pairs. Treat empty `info.websites`/`info.socials` as a reason to pivot, not as proof no sources exist. Next check Bankr exact metadata, the launch tweet, fee recipient X bio/profile links, launcher X profile when useful, pinned/recent project posts, and exact project/GitHub/org searches.
- Empty Dexscreener pairs are also common for Virtuals undergrad/pre-token records. If Virtuals returns `status: UNDERGRAD`, report market data as unavailable/undergrad rather than saying no live token or no launchpad record exists.
- Never confuse token contract with launcher/deployer. If a source does not expose launcher/deployer, report it as `unknown`; do not copy the CA into the launcher/deployer field.
- For Clanker launches, `Launcher/deployer: unknown` is acceptable only if the report also says the Clanker creator/launcher metadata was unavailable or blocked. Do not let missing launcher metadata erase the Clanker launch-source classification.
- `Please bro` risk: launcher/deployer and fee recipient differ, and the fee recipient/project has not clearly claimed fees or posted/linked the token contract. Treat this as provenance risk, not proof of scam.
- Endorsement evidence: fee recipient claims Bankr fees, posts the CA, links the Bankr/token page, or clearly acknowledges the token from an official social/channel. Good GitHub/product quality alone is not endorsement.
- Fee-recipient linkage is not endorsement. A Bankr fee-recipient handle/wallet, official-looking website URL, social profile link, or project metadata link only proves routing/context. Do not write `official endorsement` unless the official project/person acknowledges the exact token or claims fees.
- Bankr deployment is not endorsement. It proves the token launched through Bankr, not that the project/dev/fee recipient officially backs the token.
- Endorsement and fee claiming are separate. A community-launched token can be officially endorsed by a CA/token acknowledgement while fees remain unclaimed or unknown; report both fields separately.
- Fee claims matter most when launcher/deployer and fee recipient differ. If the official project/person directly launched/deployed the token, classify it as `self-launched`. If launcher/deployer and fee recipient appear to be the same controlled official party but direct self-launch evidence is unclear, classify it as `aligned`. If a community or third-party account launched it, do not call it self-launched or aligned; official acknowledgement makes it `community-launched + endorsed`.
- Bankr launch tweets and website URLs must be classified on the right axis. A `tweetUrl` from the fee recipient/project can prove official acknowledgement, but if the deployer wallet differs from the fee-recipient wallet and there is no control evidence, classify it as `community-launched + endorsed`, not `self-launched`.
- Do not mark fees as `claimed` unless Bankr-native metadata, a claim transaction/event, or an explicit recipient statement proves fee claiming. A launch tweet, website link, or CA acknowledgement can prove endorsement but not fee claiming.
- Bankr social proximity: for `please bro` launches, check whether the fee recipient/dev follows or engaged with Bankr launch-team accounts after launch, especially `@igoryuzo` and `@0xDeployer`. Also inspect replies under the target's launch/product posts for third-party Bankr support prompts that the target liked, replied to, or quoted. Direction matters: fee recipient/dev -> Bankr-linked interaction is stronger than Bankr team -> fee recipient/dev. This can indicate possible awareness or warming-up, but is not endorsement without a fee claim, CA post, token-page link, or clear acknowledgement.

## Social / X

Use X/Grok first when available. Ask for official account credibility, organic traction, founder links, quote/reply quality, suspicious shill behavior, and negative chatter.

Direct search patterns:

- `from:<official_handle>`
- `<ticker>` and `$<ticker>`
- `<contract_address>`
- `<project name>`
- `<founder_handle>` and founder display name
- `<ticker> scam OR rug OR honeypot OR bundle OR sniper OR drained OR exploit OR fake`
- `<official_handle> scam OR compromised OR hack OR exploit`

Inspect:

- Account age, posting history, follower quality, replies, quote tweets, engagement quality.
- Whether credible builders/traders discuss it without obvious paid behavior.
- Whether launch messaging matches product/code reality.
- For Bankr tokens, timestamp any follow/engagement with `@igoryuzo` or `@0xDeployer` against the token launch. Recent post-launch follows, replies, likes, or quote posts by the fee recipient/dev toward those accounts are the strongest proximity signals. Also check liked/replied/quoted third-party replies that explicitly mention Bankr support, the Bankr community, the CA, or ticker. Bankr-team replies, quotes, or follows toward the dev are weaker unless they clearly acknowledge the specific token.

## GitHub / Code

- GitHub-only inputs are first-class. If the user sends a GitHub org/repo URL, score the repo first, then search outward for an attached token tied to the repo, package, docs, homepage, owner, or maintainer.
- Scoutr's built-in repo scanner is the default GitHub/code analyzer. Do not call external paid repo scanners or payment-gated scan APIs.
- The repo scanner should capture RepoScan-style signals that are feasible from public/local sources: repo age/activity, stars/forks/license/topics, fork status, homepage, README specificity, package/config/docs/contracts/deploy/test/CI presence, commit/contributor summary when cheaply available, visible contract/token/social links, secret-risk patterns, generated/template/fork indicators, and exact-name/distinctive-phrase similarity searches.
- Similarity is approximate. Use exact GitHub/search snippets, distinctive phrases, package names, fork/parent metadata, same-file-name collisions, and copied-template markers when available, but do not claim private-index coverage.
- Include `Repo scan score: <0-10>` and keep it scoped to GitHub/Product evidence. It must not replace attached-token discovery, launch provenance, market checks, social checks, or final verdict synthesis.
- For GitHub-only scans, build a repo source map: owner, repo/org, description, topics, homepage, license, stars/forks/watchers, created date, pushed date, releases/tags, primary language, docs links, website links, package names, contract addresses, tickers, token names, X/Farcaster links, and maintainers.
- Attached-token discovery path from GitHub: README/docs/config/package files -> repo homepage/docs -> GitHub org/user profile links -> maintainer profile links -> exact repo/org/package/domain searches -> Dexscreener/Bankr/Clanker/Virtuals exact or name searches.
- Token attachment confidence must be explicit: `confirmed` when first-party repo/site/social/token page links the CA both ways or directly; `likely` for multiple first-party signals without direct CA; `possible` for ticker/name/proximity only; `not found` after checked routes.
- Do not treat a maintainer's unrelated token as attached to a repo unless the repo/org/website/docs or official project social connects them.
- GitHub discovery path: check Dexscreener/token social links, Bankr launch-page links, official X bio/profile links, project website, docs site nav/footer, package/docs references, and search for the exact org/repo before saying no GitHub was found.
- If Dexscreener has no links but Bankr exact lookup has a website URL, tweet URL, metadata URI, deployer X, or fee-recipient X, inspect those Bankr-native routes before saying no website/docs/GitHub exists. For community/please-bro launches, this fee-recipient project evidence is often the main product/code route.
- A Bankr exact match with source fields must not degrade into a market-only report. Source discovery and GitHub/product findings are mandatory unless the report states the exact blocker.
- Website checks must include link extraction. Before saying no GitHub was found from a first-party site, scan raw HTML or extracted link lists for `href` URLs, `github.com`, `docs.`, `x.com`, `twitter.com`, and footer/resource links. Do this even when the visible hero/summary text does not mention GitHub.
- If Dexscreener/token metadata exposes docs or a website, inspect that route for GitHub before assigning `Code: N/A`.
- For docs sites, inspect nav/footer/repo links and exact org-name candidates. If a docs URL is `docs.<project>.xyz` and the project has an obvious GitHub org candidate, check the exact org before saying no GitHub was found.
- If a first-party route reveals a GitHub URL, inspect it in the current report. Do not defer it to `Next Steps`.
- If the repo/org cannot be inspected because the runtime lacks browser/search access or GitHub blocks the request, write `GitHub inspection unavailable`, include the discovered URL, and name the blocker. Do not write `GitHub not found`.
- A blank website/docs/GitHub field is never acceptable. If the field cannot be populated, state exactly which first-party sources were checked or what tool blocker prevented checking. This applies to combined fields like `Website/docs:` and separate fields like `Website:` or `Docs:`.
- If a first-party site contains `github.com` in raw HTML/link extraction, `GitHub/code: not found`, `GitHub not discoverable`, and `Code: N/A` are failed conclusions. Inspect the discovered repo/org or state why inspection was blocked.
- Reject self-contradictory source conclusions. If token metadata, Bankr exact lookup, official X, website, or docs were not checked, do not write `not found after checking token metadata/social links`.
- Technical docs are product evidence, not code evidence. If docs link to GitHub, the code score should reflect the repo/org inspection, not just the docs language.
- Repo/org age, stars/forks/watchers, license, topics, default branch, recent pushes.
- Age quality: creation date, first meaningful commit date, commit span, contributor span, stale vs actively maintained, and whether history predates the token launch by weeks/months/years.
- Required report note when GitHub is cited: include age/history checked with at least one concrete date/span/source, or write `age/history not checked`.
- Launch-day repo risk: same-day repo/org, single initial dump, renamed repo, mass-generated commits, or polished docs without older development history.
- README specificity, install instructions, env examples, docs, examples.
- Commit pattern: organic history vs single dump; author credibility when relevant.
- CI status and whether claimed CI matches actual Actions.
- Build/typecheck/test/lint where feasible.
- Secret scan by text search for keys, private keys, seed phrases, tokens, `.env`.
- Contracts: tests, deployment docs, verified addresses, admin/upgrade controls.
- For Bankr `please bro` launches, analyze the fee recipient/project GitHub because it may explain speculative demand. Keep it separate from endorsement/provenance unless the same project/person claims fees or posts the CA.

## Website / App

- Does the product load and match claims?
- For heavy JS sites, first inspect title/meta tags, canonical links, obvious route links, and visible text. Avoid blocking on bundled assets or full browser rendering unless wallet/product behavior is the main risk being evaluated.
- Wallet connect behavior: no unexpected signatures, approvals, private-key requests, or blind transactions.
- Docs quality, broken links, team/company identity, legal/contact information.
- Copy/paste feel, fake partner logos, vague AI-generated claims, impossible roadmap.

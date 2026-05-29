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
- CA-only source recovery: query structured token metadata before generic search. Use Dexscreener exact CA endpoints (`/latest/dex/search?q=<contract>` and `/token-pairs/v1/<chain>/<contract>` when chain is known), select the main pair by real liquidity/volume, then extract `info.websites` and `info.socials`.
- Preserve structured results in a short source map before writing analysis. Required keys are token contract, chain, ticker, canonical pair, Dexscreener websites/socials, Bankr exact launch fields, and GitHub candidates. The final report should be copied from this source map for source/provenance fields.
- Do not let a later generic search summary erase structured facts. If Dexscreener exposed a website/docs/X link or Bankr exact lookup exposed a deployer/fee recipient/tweet, those fields stay present in the report unless a mismatch is explicitly found and explained.
- Never confuse token contract with launcher/deployer. If a source does not expose launcher/deployer, report it as `unknown`; do not copy the CA into the launcher/deployer field.
- `Please bro` risk: launcher/deployer and fee recipient differ, and the fee recipient/project has not clearly claimed fees or posted/linked the token contract. Treat this as provenance risk, not proof of scam.
- Endorsement evidence: fee recipient claims Bankr fees, posts the CA, links the Bankr/token page, or clearly acknowledges the token from an official social/channel. Good GitHub/product quality alone is not endorsement.
- Bankr deployment is not endorsement. It proves the token launched through Bankr, not that the project/dev/fee recipient officially backs the token.
- Endorsement and fee claiming are separate. A community-launched token can be officially endorsed by a CA/token acknowledgement while fees remain unclaimed or unknown; report both fields separately.
- Fee claims matter most when launcher/deployer and fee recipient differ. If the official project/person is the launcher/deployer or the same controlled party as the fee recipient, the launch is self-launched/aligned; unclaimed fees should not meaningfully penalize provenance. If a community or third-party account launched it, do not call it self-launched; official acknowledgement makes it `community-launched + endorsed`.
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

- GitHub discovery path: check Dexscreener/token social links, Bankr launch-page links, official X bio/profile links, project website, docs site nav/footer, package/docs references, and search for the exact org/repo before saying no GitHub was found.
- If Dexscreener/token metadata exposes docs or a website, inspect that route for GitHub before assigning `Code: N/A`.
- For docs sites, inspect nav/footer/repo links and exact org-name candidates. If a docs URL is `docs.<project>.xyz` and the project has an obvious GitHub org candidate, check the exact org before saying no GitHub was found.
- If a first-party route reveals a GitHub URL, inspect it in the current report. Do not defer it to `Next Steps`.
- If the repo/org cannot be inspected because the runtime lacks browser/search access or GitHub blocks the request, write `GitHub inspection unavailable`, include the discovered URL, and name the blocker. Do not write `GitHub not found`.
- A blank website/docs/GitHub field is never acceptable. If the field cannot be populated, state exactly which first-party sources were checked or what tool blocker prevented checking.
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
- Wallet connect behavior: no unexpected signatures, approvals, private-key requests, or blind transactions.
- Docs quality, broken links, team/company identity, legal/contact information.
- Copy/paste feel, fake partner logos, vague AI-generated claims, impossible roadmap.

# Source Checklist

## Token / Market

- Chain, contract address, ticker, deploy time, verified source, proxy status.
- Liquidity, volume, FDV/market cap, pair age, LP lock/burn status, holder count, top-holder concentration.
- Owner/admin powers: mint, blacklist, pause, fee changes, max tx/wallet, upgradeability.
- Buy/sell viability, honeypot/tax warnings, and trading anomalies when launcher/source is unknown or suspicious.
- Deployer history, related contracts, launch factory/platform, pool manager, router, and migration path.
- Launch mechanics: fair launch, presale, stealth, airdrop, points, claim, mining, emissions, migration.
- Bankr provenance when applicable: Bankr token page URL, deployer, fee recipient, project/person the token points at, fee claim status if visible, and whether project/social links match the actual recipient.
- `Please bro` risk: deployer and fee recipient differ, and the fee recipient/project has not clearly claimed fees or posted/linked the token contract. Treat this as provenance risk, not proof of scam.
- Endorsement evidence: fee recipient claims Bankr fees, posts the CA, links the Bankr/token page, or clearly acknowledges the token from an official social/channel. Good GitHub/product quality alone is not endorsement.
- Fee claims matter most when deployer and fee recipient differ. If deployer and fee recipient match, the self-launch itself is endorsement; unclaimed fees should not meaningfully penalize provenance.
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

- Repo/org age, stars/forks/watchers, license, topics, default branch, recent pushes.
- Age quality: creation date, first meaningful commit date, commit span, contributor span, stale vs actively maintained, and whether history predates the token launch by weeks/months/years.
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

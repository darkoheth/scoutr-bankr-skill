# Launch Provenance

Classify launch source separately from project endorsement.

## Launch Sources

- Bankr: exact Bankr launch metadata wins over underlying Doppler/Airlock/Uniswap plumbing.
- Clanker: after Bankr no-match, `b07`, `ClankerToken`, creator metadata, or exact Clanker tooling can establish Clanker provenance.
- Virtuals: exact `tokenAddress` or `preToken`; `UNDERGRAD` is valid pre-token provenance.
- DEX-native/custom: use only when named platform checks do not resolve.
- Migration/relaunch: require old/new addresses and explicit conversion/liquidity mechanics.

## Alignment Labels

Use exactly one:

- `self-launched`: official project/person directly deployed the token.
- `aligned`: deployer and fee recipient appear controlled by the same official party, but direct self-launch proof is incomplete.
- `community-launched + endorsed`: a third party launched it and the official target later acknowledged the exact token.
- `pre-endorsement speculation`: real target project/product exists, but exact-token acknowledgement is missing.
- `please bro`: third-party launcher targets a project/person hoping for later endorsement or fee claiming.
- `unclear`: sources are unavailable or contradictory.

Do not combine labels.

## Exact-Token Endorsement

Valid:

- official CA post
- official Bankr/token-page link
- official ticker/cashtag post clearly about this token
- official reply/quote whose context contains the exact CA/token page
- first-party site/docs/repo naming the exact CA/token page
- direct fee-claim evidence

Not valid by itself:

- fee-recipient routing
- official-looking website
- product/repo announcement
- strong GitHub
- Bankr event appearance
- follows, likes, replies, or ecosystem proximity

## Fee Claims

Write `claimed` only with:

- Bankr claim status
- claim transaction/event
- launch/fee-infrastructure transfer to the exact fee-recipient wallet
- explicit recipient statement

Otherwise use `unknown` or source-backed `unclaimed`.

## Deployer Identity

Do not infer deployer affiliation transitively. A real project, founder, website, or fee recipient does not prove the separate deployer represents them.

If affiliation is unproven:

`Launcher/deployer: <handle/address> (affiliation to project not found)`

Then use `please bro` or `pre-endorsement speculation` unless exact-token endorsement exists.

## Required Cap

Deployer differs from fee recipient and there is no exact-token acknowledgement or fee claim:

- max Provenance 6
- max verdict `Watch`
- max confidence `Medium`
- `Endorsement evidence: none found for this CA`

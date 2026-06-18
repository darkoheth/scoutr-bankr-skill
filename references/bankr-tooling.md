# Bankr Tooling

Use structured Bankr data first for Bankr launches, then fill missing market and source fields with exact public routes.

## Required Order For A Contract Address

1. `get_token_launch_info` for launch source, deployer, fee recipient, website, tweet, pool, transaction, and timestamp.
2. `get_token_market_data` or `token_search` for chain, ticker, FDV/MC, volume, holders, and linked metadata.
3. Exact Dexscreener token search/token-pairs for canonical pair, liquidity, FDV/MC, volume, website, and socials.
4. GeckoTerminal exact token/pools if any market field or primary pair remains missing.
5. Explorer holder/top-holder data or a precise blocker.
6. Follow Bankr/Dex website, docs, X, and metadata links to GitHub.

For `ba3` contracts, Bankr is the expected first launch candidate. Retry exact lookup with normalized casing before saying no Bankr match.

If Bankr-native tools omit liquidity or primary-pair data, call `browse_url` or the available URL-fetch/search tool on:

`https://api.dexscreener.com/token-pairs/v1/<chain>/<contract>`

This call is mandatory before `Liquidity: unknown`. Prefer the pair matching Bankr `poolId`; otherwise use the pair with meaningful real liquidity.

## Binding Data Rules

- Copy structured values exactly. Do not estimate liquidity, FDV, volume, holders, concentration, deployer identity, fee claims, or endorsement.
- If Dexscreener or Gecko returns liquidity, print that value. Never replace it with a range or `estimated`.
- If Bankr returns `websiteUrl`, print the literal URL in `Website/docs`.
- If Bankr returns `tweetUrl` or X usernames, print the literal URL/handle in `X/social`.
- If a website/docs/X page exposes a GitHub URL, print and inspect that literal URL.
- If a field cannot be resolved, print `unknown: <blocker>` or `not found after checking <routes>`.

## Bankr Provenance

Bankr deployment establishes launch source only.

- Deployer differs from fee recipient with no exact-token acknowledgement or fee claim:
  - `Alignment: please bro` or `pre-endorsement speculation`
  - `Endorsement evidence: none found for this CA`
  - max Provenance 6, max verdict `Watch`, max confidence `Medium`
- Official account posts the exact CA, token page, or clearly acknowledges the token:
  - `Alignment: community-launched + endorsed`
  - cite the exact post/page
- Fee claim requires Bankr claim metadata, a claim transaction/event, a launch-infrastructure transfer to the exact fee-recipient wallet, or an explicit recipient statement.

Fee routing, website links, product posts, GitHub quality, Bankr events, follows, likes, and social proximity are not token endorsement by themselves.

## Source Recovery

When Dex metadata is empty:

1. Use Bankr `websiteUrl`, `tweetUrl`, `metadataUri`, deployer X, and fee-recipient X.
2. Inspect official X bio/profile links.
3. Extract raw website/docs links for `github.com`, `docs.`, `x.com`, and `twitter.com`.
4. Search the exact project/org name on GitHub.

Never output a blank source field. Parenthetical labels such as `(official)`, `(active org)`, or `(extracted from project context)` are invalid.

## Other Launch Platforms

- `b07` after Bankr no-match: check Clanker first.
- Base AI-agent token with empty Bankr/Dex results: check Virtuals exact `tokenAddress` and `preToken`.
- A Virtuals `UNDERGRAD` result is valid pre-token provenance even without a live DEX pair.

## Latency

Do not wait on login walls, huge JS bundles, or exhaustive crawling. State the blocker, cap confidence, and return the report.

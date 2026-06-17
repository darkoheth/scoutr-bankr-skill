# Source Checklist

Build a compact source map before writing prose. Copy final report fields from the map.

## CA / Token Inputs

Check in this order:

1. Exact Bankr lookup when the CA ends in `ba3`, a Bankr URL is supplied, or Bankr is plausible.
2. Exact Dexscreener token search and token-pairs lookup.
3. GeckoTerminal exact token/pool fallback if liquidity, FDV, volume, or pair data is missing.
4. Explorer holder/top-holder snapshot or explicit blocker.
5. First-party links from Bankr/Dex metadata: website, docs, X, tweet URL, metadata URI.
6. Raw website/docs link extraction for `github.com`, `docs.`, `x.com`, `twitter.com`, and footer links.
7. Official X bio/profile links and recent exact-token acknowledgement.
8. GitHub exact org/repo search before saying no repo exists.

Required source-map keys:

- token contract, chain, ticker
- canonical pair/pool and source
- FDV/MC, liquidity, volume, holders/concentration, and source
- Bankr launch fields if present: deployer, fee recipient, websiteUrl, tweetUrl, poolId, tx hash, timestamp
- website/docs URL(s) or blocker
- X handle/URL or blocker
- GitHub URL(s) plus age/history, or blocker
- endorsement evidence and fee-claim status

## Source Line Rules

Never leave source lines blank. Never use parentheses-only labels.

Invalid:

- `Website/docs:`
- `Website/docs: (Verified docs)`
- `Website/docs: (extracted from project context)`
- `X/social: (official)`
- `GitHub/code:`
- `GitHub/code:; org created 2024`
- `GitHub/code: (active org)`
- `GitHub/code: 30+ repos`

Valid:

- `Website/docs: https://example.com; https://docs.example.com`
- `X/social: @example; https://x.com/example/status/...`
- `GitHub/code: https://github.com/example/project; created 2024-11, pushed 2026-06, tests present`
- `GitHub/code: not found after checking Bankr metadata, Dexscreener links, X bio, website footer, docs nav, and exact org search`
- `Website/docs: unavailable: site timed out during fetch`

If the runtime knows a GitHub org exists but cannot produce the literal URL, write a blocker and cap Code:

`GitHub/code: unavailable: GitHub URL not recoverable from checked sources; age/history not checked`

## Bankr Provenance

- Bankr deployment proves launch source, not project endorsement.
- Fee-recipient routing proves potential beneficiary, not endorsement.
- Deployer/launcher and fee recipient are separate fields.
- If deployer differs from fee recipient and no exact-token acknowledgement/fee claim is cited:
  - `Alignment: please bro` or `pre-endorsement speculation`
  - `Endorsement evidence: none found`
  - max Provenance 6
  - max verdict `Watch`
  - max confidence `Medium`
- If official project/person posts the exact CA, links the Bankr/token page, clearly acknowledges the token, or claims fees:
  - `Alignment: community-launched + endorsed`
  - cite the exact evidence
  - keep fee-claim status separate

Fee claims require direct evidence: Bankr metadata, claim tx/event, launch-infrastructure transfer to the exact fee-recipient wallet, or explicit recipient statement.

## Market Rules

- Copy FDV/MC, liquidity, volume, and holder count from selected structured sources.
- Do not estimate liquidity from volume, FDV, chart shape, or common pool patterns.
- Do not write `Liquidity: unknown` when exact Dexscreener/Gecko pair data returns liquidity.
- If sources conflict, cite the freshest named source and downgrade confidence.
- Holder concentration, top-holder quality, smart-money claims, taxes, and lock status require direct checks. Otherwise write unknown/not checked.

## GitHub / Code

- GitHub/code must contain a literal GitHub URL plus age/history note, or a not-found/blocker statement.
- Before `not found`, check Bankr metadata, Dexscreener links, official X bio, website/footer, docs nav/footer, package/docs references, and exact org/repo search.
- If a GitHub URL is found, inspect it or state the blocker with the discovered URL.
- Code score 8+ requires inspected code substance, tests/CI or equivalent verification, and organic history.
- If GitHub is private, inferred from founder reputation, not inspected, or missing a literal URL, cap Code at 6.

## Attached Token Discovery

For GitHub, X, website, or docs inputs without a CA:

- Search Bankr launches by exact handle, project name, domain, ticker, and supplied URL.
- Search Dexscreener/Gecko by exact project name, ticker, domain, and handle.
- Rank candidates by first-party match strength: exact CA/link, exact tweetUrl, exact website/domain, fee-recipient/project handle, deployer/author handle, exact token name/symbol, loose ticker/name.
- Use `confirmed`, `likely`, `possible`, or `not found`; do not attach a token from name similarity alone.

## Latency Guard

Do not hang on large JS bundles, login walls, social pages, media assets, or exhaustive crawls. Record the blocker and return a capped report.

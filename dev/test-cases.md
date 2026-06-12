# Regression Test Cases

Run these behavior classes before publishing Scoutr, after changing provenance logic, or before submitting the skill to a public catalog. Keep public test cases generic: do not add specific token names, contract addresses, private notes, or one-off fixtures here.

## Self-Aligned Bankr Launch

Expected classification:

- Bankr launch metadata resolves from Bankr-native tooling or exact Bankr lookup.
- Deployer/launcher and fee recipient are the same official project/person, or first-party evidence proves they are controlled by the same official party.
- Treat as `self-launched` or `aligned`, whichever the evidence specifically supports.
- Do not require fee claiming as endorsement when the launch is already self-aligned.
- Verdict should still respect code/product/market evidence. If GitHub or product proof is missing, cap posture appropriately.

## Third-Party Bankr Launch Without Acknowledgement

Expected classification:

- Bankr launch metadata resolves.
- Deployer/launcher and fee recipient differ.
- Fee recipient/project may have strong product or GitHub evidence, but no exact-token acknowledgement is found.
- Social proximity, follows, likes, replies, product posts, or fee routing alone do not count as endorsement.
- Use `please bro` or `pre-endorsement speculation`.
- Cap provenance, confidence, and verdict until exact-token acknowledgement or fee-claim evidence is found.

## Third-Party Bankr Launch With Exact-Token Acknowledgement

Expected classification:

- Bankr launch metadata resolves.
- Deployer/launcher and fee recipient differ.
- Official project/person acknowledges the exact token by posting the CA, linking the Bankr/token page, using the ticker in clear token context, replying/quoting in an exact-token fee context, or publishing a first-party site/docs/repo page naming the exact token.
- Classify as `community-launched + endorsed`, not `self-launched`, unless deployer control is also proven.
- Keep `Fee-claim status` separate. Endorsement by post/link does not prove fees were claimed.

## Fee-Claim Evidence For Community Launch

Expected classification:

- Bankr/Doppler-style launch metadata resolves.
- Deployer/launcher and fee recipient differ.
- Recent fee-recipient wallet activity shows WETH/USDC/EURC/launched-token transfers from launch/fee infrastructure to the exact fee-recipient wallet after launch.
- Treat the transfer as direct fee-claim evidence even if explorer rows lack decoded `claim` method labels.
- Classify as `community-launched + endorsed`, cite the transfer source, and set `Fee-claim status: claimed`.

## Non-Bankr Custom Or DEX-Native Launch

Expected classification:

- Bankr exact lookup returns no match after the required checks.
- Other launch platforms are checked when suggested by suffix, source labels, or market context.
- If structured evidence points to a custom verified token or DEX-native pool, classify that route without forcing Bankr/Clanker/Virtuals.
- Copy canonical pair, pool version, liquidity, FDV/MC, volume, and holders from exact structured market sources when available.
- Do not leave liquidity unknown if Dexscreener/Gecko exact token-pair fallback returned a live pair.

## Empty Or Conflicting Source Fields

Expected classification:

- If token metadata, Bankr, Dexscreener, website, docs, or X exposes website/social/GitHub links, the final `Sources` lines must contain the literal URLs/handles or a concrete blocker.
- Blank fields, bare parentheses, and labels such as `official`, `active org`, or `via search` without literal URLs are failed output.
- Source trace cannot say a route found a link while the corresponding source line says `not found`.

## Pass Criteria

- Verdict appears first.
- Reports contain no token-specific regression names or private fixture addresses.
- Bankr cases include launcher, fee recipient, alignment, endorsement evidence, and fee-claim status.
- Social proximity never becomes endorsement by itself.
- Good GitHub/product proof is scored separately from token endorsement.
- Non-Bankr scans still verify canonical market pair, pool version, liquidity, and source links from structured data.
- Unknowns are explicit when launch metadata, X search, holder data, or GitHub checks are unavailable.
- No output tells the user to buy, sell, hold, or trade.

# Regression Test Cases

Run these cases before publishing Scoutr, after changing provenance logic, or before submitting the skill to a public catalog. Use current live data, but preserve the expected classification logic below.

## machineODDS

Input:

```text
0xF7B36e3CEf28D77dD6193531C54E6fB34990ABA3
```

Expected classification:

- Bankr launch.
- Deployer/launcher and fee recipient align with the project account.
- Treat as self-launched/aligned; do not require fee claiming as endorsement.
- Verdict should not exceed the code/product evidence. If GitHub remains undiscovered, cap at `Small Spec` or high-risk `Watch`.

## IMPECCABLE

Input:

```text
0x8bbb0050a39aabff299043db31f4947bc6b7fba3
```

Expected classification:

- Bankr launch with deployer and fee recipient differing.
- Strong fee-recipient/project quality signal from the real Impeccable repo/product.
- No official CA post, token-page link, fee claim, or clear acknowledgement means unresolved `please bro` / pre-endorsement speculation.
- Target/founder liking a Bankr-community prompt is social proximity, not endorsement.
- Cap at `Watch+` or cautious `Small Spec` unless explicit endorsement appears.

## HERALD

Input:

```text
0x7ac13be3939f75e28135097a1b6398fe024ecba3
```

Expected classification:

- Bankr-style launch.
- Target/dev posted the CA and engaged directly with Bankr/Igor context.
- Treat target/dev-initiated engagement and CA posting as much stronger than Bankr team following the target.
- Should score higher on provenance than pure `please bro` examples.

## 1clawAI

Input:

```text
0x61d91cff0fc9fbbdb89f505cf8a7422bf95fdba3
https://bankr.bot/launches/0x61d91cff0fc9fbbdb89f505cf8a7422bf95fdba3
```

Expected classification:

- Bankr launch. Bankr-native launch metadata wins.
- Bankr exact launch lookup should find an `exactMatch` with deployer `@1Nzz_`, fee recipient `@cryptomastery_`, `tweetUrl`, `websiteUrl`, pool ID, tx hash, and timestamp. Expected failure if these are reported unknown while the API is available.
- Doppler/Airlock/Whetstone/Rehype/Uniswap v4 deployment plumbing is expected for newer Bankr launches and must not be used to rule out Bankr.
- Launcher and fee recipient differ, and the launcher is not the official project account. Classify as pre-endorsement speculation / `please bro` unless fee recipient or official project posts the CA, links the token page, claims fees, or clearly acknowledges the token. If clear official acknowledgement exists, classify as `community-launched + endorsed`, not self-launched.
- Real product/GitHub evidence improves Code/Product but does not complete endorsement by itself.
- Docs/site/X bio expose `https://github.com/1clawAI`; Scoutr should follow the Dexscreener -> docs/site/X bio -> GitHub discovery chain before saying GitHub is missing.
- Dexscreener exact-CA metadata exposes website/docs/X links for this token. Expected failure if the output says website/X/GitHub were not found after checking token metadata.
- Expected failure if output says `GitHub repository not inspected`, `check GitHub for active development`, or `GitHub not directly linked in metadata` after seeing `docs.1claw.xyz` or `github.com/1clawAI`.
- Expected behavior: inspect `https://github.com/1clawAI` in the same report, include org/repo age/history, and score Code from repo evidence. If blocked, state `GitHub inspection unavailable` with the blocker and URL.
- If official project/dev posts the CA, endorsement can be marked present even if fee claim remains unclaimed or unknown. Report fee-claim status separately.
- Expected failure if output says `Alignment: self-launched`, `Alignment: Aligned (Self-launched)`, or `official Bankr deployment` while the launcher is a third-party/community account.
- Expected failure if the token CA is copied into `Launcher/deployer` as though it were the deployer.
- Expected failure if `Website:` is blank. If live discovery fails, the report must still say `Website/docs: unavailable` with the checked sources/blocker, not leave an empty field.
- Generalized lesson: when a Dexscreener, Bankr, official X bio, website, or docs route exposes a first-party site/docs/GitHub link, Scoutr must inspect it in the same report or state the exact blocker. Do not add token-specific fallbacks to production instructions; regression examples are only examples.

## DOT

Input:

```text
0x23A2847d772803f9EFC64B4277b782b06296FE51
```

Expected classification:

- Do not force Bankr provenance if no Bankr-native launch record or page is present.
- Evaluate as non-Bankr/ambiguous launch.
- Official account posting CA and docs improves Social/Product, but unresolved explorer/source-label or holder-data issues should remain in Unknowns/Risks.

## Pass Criteria

- Verdict appears first.
- Bankr cases include launcher, fee recipient, alignment, and endorsement evidence.
- Social proximity never becomes endorsement by itself.
- Good GitHub/product proof is scored separately from token endorsement.
- Unknowns are explicit when Bankr-native tools, X search, holder data, or GitHub checks are unavailable.
- No output tells the user to buy, sell, hold, or trade.

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
- Treat as self-launched or aligned, whichever the evidence specifically supports; do not require fee claiming as endorsement.
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
- Expected failure if the output says `Launch source: Custom`, `Launch source: unknown`, `Fee recipient: N/A`, or `Bankr relationship evidence: None found` while the Bankr exact lookup is available.
- Expected failure if a later generic search, social summary, or explorer read overwrites exact Dexscreener/Bankr fields already found in the source map.
- If Dexscreener metadata is empty on a fresh pair, expected behavior is to recover sources from Bankr `websiteUrl`/`tweetUrl` and the fee recipient social profile before saying website/docs/X/GitHub are missing.
- Doppler/Airlock/Whetstone/Rehype/Uniswap v4 deployment plumbing is expected for newer Bankr launches and must not be used to rule out Bankr.
- Launcher and fee recipient differ, and the launcher is not the official project account. Classify as pre-endorsement speculation / `please bro` unless fee recipient or official project posts the CA, links the token page, claims fees, or clearly acknowledges the token. If clear official acknowledgement exists, classify as `community-launched + endorsed`, not self-launched.
- Real product/GitHub evidence improves Code/Product but does not complete endorsement by itself.
- Docs/site/X bio expose `https://github.com/1clawAI`; Scoutr should follow the Dexscreener -> docs/site/X bio -> GitHub discovery chain before saying GitHub is missing.
- Dexscreener exact-CA metadata exposes website/docs/X links for this token. Expected failure if the output says website/X/GitHub were not found after checking token metadata.
- Expected failure if output says `GitHub repository not inspected`, `check GitHub for active development`, or `GitHub not directly linked in metadata` after seeing `docs.1claw.xyz` or `github.com/1clawAI`.
- Expected behavior: inspect `https://github.com/1clawAI` in the same report, include org/repo age/history, and score Code from repo evidence. If blocked, state `GitHub inspection unavailable` with the blocker and URL.
- If official project/dev posts the CA, endorsement can be marked present even if fee claim remains unclaimed or unknown. Report fee-claim status separately.
- Expected failure if output says `Alignment: self-launched`, `Alignment: Aligned (Self-launched)`, or `official Bankr deployment` while the launcher is a third-party/community account.
- Expected failure if output uses slash-combined `Alignment: self-launched/aligned` instead of choosing one exact label.
- Expected failure if output says `Fee-Claim Status: Claimed` without direct fee-claim evidence from Bankr metadata, a claim transaction/event, or explicit recipient claim.
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

## LAGANN / Virtuals Undergrad

Input:

```text
0x4265a0210dd20465b6f669fc45e5ca0534319a5d
```

Expected classification:

- Not Bankr. Bankr exact lookup returns no match; do not force the Bankr provenance template as if Bankr is the only possible launch source.
- Blockscout/explorer may show token symbol/name `LAGANN` even when Dexscreener has no pair.
- Virtuals exact `preToken` lookup should find a matching record with name/symbol `LAGANN`, `status: UNDERGRAD`, `preToken` equal to the input CA, `preTokenPair` `0x3b4b16e3014B798F775391c9FB101563EDab3e73`, and created date `2026-05-29`.
- Classify launch source as `Virtuals`, platform status `UNDERGRAD` / pre-token. Missing Dexscreener data should be reported as undergrad/no public DEX pair found, not as proof the token does not exist.
- If Virtuals record has no socials/website, source fields should say not found after checking Virtuals metadata plus search/social fallback, not only token metadata.
- Expected failure if output says no launchpad record, no active token, or launch source unknown while Virtuals exact `preToken` lookup is available.
- Expected failure if output includes Bankr launcher/fee-recipient/alignment fields as primary evidence for a non-Bankr Virtuals token.

## AgentBounty / Clanker b07

Input:

```text
0x33e167fa22c9d78236b1a21c80e8b712205d1b07
```

Expected classification:

- Not Bankr if Bankr exact lookup returns no match.
- CA ends in `b07`, which is a strong newer-Clanker hint after Bankr no-match.
- Blockscout/explorer verified contract name/source is `ClankerToken`; Dexscreener labels the canonical pool as Uniswap v4.
- Classify launch source as `Clanker / Uniswap v4`, not `Uniswap v4 (Custom)` and not unknown.
- If Clanker creator/launcher metadata cannot be extracted from Clanker tools/page, write `Launcher/deployer: unknown: Clanker creator metadata unavailable`; do not let that erase Clanker provenance.
- Dexscreener exposes first-party links: `https://agentbounty.dev`, founder site/newsletter, `https://x.com/agentbountydev`, Telegram, Discord, and Farcaster. These should populate sources, not blanks.
- Expected failure if output says `custom launch`, `standard Uniswap v4 pool`, or `Launch source: unknown` without acknowledging Clanker evidence.

## RUNNER / Legacy Clanker + Heavy Site

Input:

```text
0x18b6f6049A0af4Ed2BBe0090319174EeeF89f53a
```

Expected classification:

- Do not hang. Public checks should complete from structured routes: Dexscreener exact CA/token-pairs, Bankr exact lookup, explorer token/contract metadata, and website metadata/visible links.
- Bankr exact lookup currently returns no match. Do not force a current Bankr/Doppler classification without Bankr-native evidence.
- Dexscreener exposes first-party sources: `https://runneronbase.io/`, `https://x.com/runnerbased`, and `https://farcaster.xyz/runonbase.eth`.
- Website metadata/visible text exposes additional first-party routes such as `https://docs.runneronbase.io`, the Farcaster mini app, Dune dashboard, and Basescan link. These should populate source fields or source trace.
- The website is a large/JS-heavy first-party site. Read metadata, visible links, and a small text sample first; do not crawl Framer/asset bundles or block on full rendering before returning a report.
- Official website copy says RUNNER is "the first clanker". Treat this as project/site provenance evidence for legacy Clanker context, with confidence/unknowns if Clanker creator metadata is unavailable.
- Expected failure if the report leaves `Website/docs` blank, says no sources were found, or times out because it tries exhaustive website/social crawling.

## GitHub-Only Input / Repo First, Token Second

Input:

```text
https://github.com/1clawAI
```

Expected classification:

- Treat the GitHub URL as the primary input, not as a missing-token error.
- Inspect and score the GitHub org/repo quality first: org/repo age, repo list, recent pushes, README/docs, package/contracts/tests/CI where available, and whether history predates any token launch.
- Then search outward for an attached token using repo/org profile links, README/docs/package files, homepage/docs links, X/social links, exact org/project/package searches, and launch-platform lookups.
- If a token candidate is found, classify attachment confidence as `confirmed`, `likely`, or `possible` based on first-party linkage strength, then run the CA-only provenance path for that CA.
- If no credible token is found, output `Attached Token: not found` with checked routes and keep `Token: N/A`; do not invent market or launch provenance.
- Expected failure if the report only says "send a contract address", ignores the repo, or analyzes code without attempting attached-token discovery.

## Pass Criteria

- Verdict appears first.
- Bankr cases include launcher, fee recipient, alignment, and endorsement evidence.
- Social proximity never becomes endorsement by itself.
- Good GitHub/product proof is scored separately from token endorsement.
- Unknowns are explicit when Bankr-native tools, X search, holder data, or GitHub checks are unavailable.
- No output tells the user to buy, sell, hold, or trade.

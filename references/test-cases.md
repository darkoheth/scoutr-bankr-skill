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

## Evokoa / Product Proof Is Not Token Endorsement

Input:

```text
0x02aceb16a30e1467f61127b4ceb65967d89c5ba3
```

Expected classification:

- Bankr / Doppler exact match. Bankr fields include deployer `@pola_pola0` / `0x2d52db1746d076ab1499a0d7300c29c861c6e7eb`, fee recipient `@evokoa_ai` / `0x589df37198898a44862f9d1cd194bbe631a2e1b6`, `tweetUrl: https://x.com/daleverett/status/2054537123123110277?s=20`, website `https://evokoa.com/`, and pool ID `0x574d92f9605704cba0f3153d11d8f8ab2632a9500bde196d4aaf9273eeeedd70`.
- The `tweetUrl` is a May 13, 2026 pgGraph/product/repo launch post from Evokoa's cofounder. It is real product evidence, but it does not mention the token CA, ticker, Bankr page, fee claim, or token launch.
- Deployer and fee recipient differ. Do not infer `@pola_pola0` controls Evokoa, works for Evokoa, or launched officially unless a checked first-party source states that relationship.
- Website/docs/GitHub (`https://github.com/Evokoa/pggraph`) can score Code/Product well, but cannot convert launch alignment to `self-launched`, `aligned`, or `community-launched + endorsed` without an explicit token acknowledgement.
- Expected alignment is `please bro` or `pre-endorsement speculation` until `@evokoa_ai`, Dale, Dalton, the Evokoa site/docs, or Bankr-native fee claim evidence acknowledges the exact token.
- Expected failure if the report says `Alignment: self-launched`, `Official project launch via Bankr`, `Endorsement evidence: launch tweet by @daleverett`, or Provenance 9+ based on the product tweet/website/GitHub alone.
- Expected behavior: `Endorsement evidence: none found for this CA; Bankr tweetUrl points to product/social evidence, not token acknowledgement`.
- Cap confidence at Medium while endorsement is unresolved even if product/code quality is high.

## Sparkleware / Unproven Deployer Profile Is Not Self-Launch

Input:

```text
SPARKLE / sparkleware Bankr launch where Bankr exact lookup lists deployer @callmexenom and fee recipient @sparklewarefun
https://x.com/callmexenom
https://x.com/sparklewarefun/status/2062232924221821168
```

Expected classification:

- Bankr launch if Bankr exact lookup resolves.
- `@sparklewarefun` may be the official project/social account and Sparkleware/Aeon product/code evidence may be real, but that does not prove the deployer controls or belongs to Sparkleware.
- Visible/indexed `@callmexenom` profile evidence checked on 2026-06-03 did not prove Sparkleware/Aeon affiliation: display name `rn`, bio effectively `pizza`, `gmon.link/rn`, and recent visible activity around generic degen/AVAX/Fogo/Capy replies rather than Sparkleware, Sparkleweave, Aeon, `@aeonframework`, or `@sparklewarefun`.
- Do not infer `@callmexenom` is part of Sparkleware/Aeon from fee routing, follows, replies, ecosystem proximity, or a good product/GitHub trail.
- Expected alignment is `please bro` or `pre-endorsement speculation` until first-party evidence proves `@callmexenom` is the team/deployer for Sparkleware, or until `@sparklewarefun`/official site/docs posts the exact CA, Bankr page, ticker-as-token, fee claim, or clear token acknowledgement.
- If the official Sparkleware account/site clearly acknowledges the exact token but deployer affiliation remains unproven, classify as `community-launched + endorsed`, not `self-launched`.
- Official soft-endorsement evidence exists in tweet `2062232924221821168`: `@sparklewarefun` replied/posted in direct context of a prompt containing exact CA `0x842e863b9a7b3d0e325daf3888a4e181641ccba3` and Bankr fee context, saying the project would use the fees to keep building on `@aeonframework` and `@miroshark_`. This is exact-token acknowledgement / soft endorsement.
- Expected behavior after finding that tweet: `Alignment: community-launched + endorsed`; `Endorsement evidence: official @sparklewarefun fee-context acknowledgement in reply/quote context for exact CA`; `Fee-claim status: unclaimed/unknown unless Bankr claim evidence is directly checked`; deployer affiliation still unproven.
- Expected failure if the report says `Alignment: self-launched`, `Alignment: aligned`, `official project launch via Bankr`, Provenance 8+, `Verdict: Trade Candidate`, or `Confidence: High` based only on fee recipient `@sparklewarefun`, product integration with Aeon, or unproven deployer profile context.
- Expected failure if Scoutr says `Endorsement evidence: none found for this CA` after the official fee-context post is available and checked.
- Expected behavior before finding exact-token acknowledgement: `Launcher/deployer: @callmexenom (affiliation to Sparkleware/Aeon not found)` and `Endorsement evidence: none found for this CA`.

## Blitz / Lead-Dev Product Tweet Is Not Self-Launch

Input:

```text
Blitz / BLITZ Bankr launch where Bankr exact lookup lists deployer @pola_pola0 and fee recipient @blitzdotdev
CA: 0xb5ac5e7a8424e964d539b686f9dcfeaa5a8f1ba3
```

Expected classification:

- Bankr / Doppler launch if Bankr exact lookup resolves.
- Deployer `@pola_pola0` and official fee recipient `@blitzdotdev` differ. Do not infer `@pola_pola0` controls Blitz or is part of the Blitz team unless checked first-party sources prove that relationship.
- Do not alias the deployer to the founder. `Launcher/deployer: @pola_pola0 (Minjune Song / @minjunesh)` is a failed report unless it cites a direct first-party source proving `@pola_pola0` is Minjune/`@minjunesh`.
- `@blitzdotdev` being the official project account and fee recipient is fee routing/source context only. It is not endorsement by itself.
- Verifying `@minjunesh` as a Blitz founder/lead dev does not prove `@pola_pola0` is `@minjunesh`, controls a Minjune wallet, or is affiliated with Blitz. Do not use transitive identity chains like `@minjunesh -> Blitz`, `@blitzdotdev -> Blitz`, therefore `@pola_pola0 -> Blitz`.
- Bankr metadata that lists `@pola_pola0` as deployer and `@blitzdotdev` as fee recipient does not verify affiliation between them. Do not write `Launcher/deployer: @pola_pola0 (Verified affiliation via Bankr metadata)`.
- High-quality product/code evidence, such as a real macOS app, MCP server, Swift repo, or strong GitHub history, should score Code/Product well but must not upgrade Provenance to `self-launched`, `aligned`, or `Trade Candidate`.
- Real target-project GitHub exists and must not be lost just because token provenance is unendorsed: `https://github.com/blitzdotdev/blitz-mac`. The official site `https://blitzapp.dev/` exposes a GitHub link, and the repo shows a real Swift/macOS App Store Connect MCP project with Apache-2.0 license, ~1.7k stars, 249 visible commits, and build/source/docs files. Related first-party/near-first-party evidence may include `@blitzdev/iphone-mcp`, but do not substitute unrelated repos.
- Expected behavior: Code/Product should reflect the real Blitz target project, while Provenance remains unendorsed until exact-token acknowledgement. Use wording like `Target project GitHub: blitzdotdev/blitz-mac found via blitzapp.dev / project search; product/code evidence does not prove token endorsement`.
- Expected failure if the report says `Website/docs: not found`, `X/social: not found`, `GitHub/code: not found`, `Product: N/A`, or `GitHub inspection unavailable: no first-party GitHub link found` without checking `blitzapp.dev`, `blitzdotdev GitHub`, `Blitz App Store Connect MCP GitHub`, and official/founder/profile routes.
- A tweet from a claimed founder/lead dev such as `@minjunesh` is not token endorsement unless the checked tweet mentions or directly links the exact CA, Bankr/token page, ticker-as-token, fee claim, or clear token acknowledgement. If it is only a Blitz product/app/repo announcement, score it under Product/Social only.
- Expected alignment is `please bro` or `pre-endorsement speculation` until `@blitzdotdev`, the Blitz site/docs, a verified Blitz founder/lead-dev account, or Bankr-native fee-claim evidence acknowledges the exact token.
- Mechanical cap before exact-token acknowledgement: Provenance <= 6, Confidence <= Medium, verdict <= `Watch` / cautious `Small Spec`, and `Endorsement evidence: none found for this CA`.
- If an official Blitz account or verified lead-dev account clearly acknowledges the exact token but deployer affiliation remains unproven, classify as `community-launched + endorsed`, not `self-launched`.
- `Alignment: community-launched + endorsed` also fails unless the report cites the exact token acknowledgement source: CA, Bankr/token page, ticker-as-token, fee claim, official site/docs token link, or official reply/quote context containing the CA/Bankr page/ticker. Founder/project acknowledgement alone is not enough.
- Expected failure if the report says `Alignment: community-launched + endorsed` with `Endorsement evidence: fee recipient @blitzdotdev is the official project account; launch tweet from @minjunesh acknowledges the project`.
- Expected failure if the report has a blank `Launch tweet:` line while claiming official/community endorsement.
- Expected failure if the report says `Alignment: self-launched`, `Provenance: 9+`, `Provenance: 9 - Official self-launch`, `Verdict: Trade Candidate`, `Confidence: High`, `Strong provenance: direct alignment`, `self-launched by founder @minjunesh`, `Launcher/deployer: @pola_pola0 (Minjune Song / @minjunesh)`, `Launcher/deployer: @pola_pola0 (Verified affiliation via Bankr metadata)`, `Endorsement evidence: official project account is fee recipient`, or `launch tweet from @minjunesh` without exact-token context.
- Expected failure if the report says `Alignment: aligned`, `Provenance: 8+`, or `Endorsement evidence: launch tweet by @minjunesh; fee recipient is official project account` before exact-token acknowledgement.
- Expected failure if the report uses softened provenance claims such as `official token for the ecosystem`, `Verified founder-linked wallet`, `direct self-launch by known founder`, `official project lead`, `alignment is perfect`, `official token`, `deployer and fee recipient are verified project handles`, `official project handles tied to fees and deployment`, `launch tweet linked to project`, `fee-recipient linkage`, `legitimate self-launch`, or `direct alignment` without exact-token acknowledgement or direct deployer-control proof.
- Expected failure if the report writes `Endorsement evidence: Official launch tweet from @minjunesh (linked to project) and fee-recipient linkage` or treats a Minjune/Blitz product tweet as token-launch evidence.
- Expected behavior before exact-token acknowledgement: `Launcher/deployer: @pola_pola0 (affiliation to Blitz not found)`, `Fee recipient: @blitzdotdev`, `Alignment: please bro` or `pre-endorsement speculation`, and `Endorsement evidence: none found for this CA`.

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

## QUILL / Custom Verified Contract, Not Clanker

Input:

```text
0x60a646e3fd75cde4c5b604b22d4fcd04639913c8
```

Expected classification:

- Not Bankr if Bankr exact lookup returns no match.
- Not Virtuals if exact `tokenAddress` and `preToken` lookups return no match.
- Do not classify as Clanker just because `https://www.clanker.world/clanker/<contract>` returns a 200, redirects to checksummed casing, or serves a generic Next.js app/loading shell.
- Address does not end in `b07`, and explorer verified source/name is `QuillToken`, not `ClankerToken`.
- Contract source is a project-specific fixed-supply burnable ERC-20 with constructor treasury mint and no owner/minting after deploy. Classify launch as `custom verified ERC-20 / Uniswap v4`, not Clanker.
- Dexscreener exposes first-party links: `https://quill.computer/` and `https://x.com/quillcomputer`; docs expose `QuillToken 0x60A646e3fD75CdE4c5b604b22d4Fcd04639913C8`.
- Expected failure if output says `Launch source: Clanker` without validated Clanker evidence such as `b07`, `ClankerToken`, factory labels, or token-specific Clanker API/route data.

## RomanStorm / Fee Recipient Endorsed, Not Self-Launched

Input:

```text
0x2986b9f1ad2aac1b39ce406ae0af6088032dbba3
```

Expected classification:

- Bankr / Doppler launch. Bankr exact lookup returns token name `FreeRomanStorm.com`, symbol `RomanStorm`, `tweetUrl`, `websiteUrl`, deployer wallet `0xf2239050c1c53c68dd8a439e63be6f3ba9190dc0`, and fee recipient wallet/X `0x0b8aa08b5dc9b295c97d5d5290a3a6f72249941f` / `@rstormsf`.
- Deployer wallet and fee-recipient wallet differ, and the Bankr deployer has no `xUsername` in the exact metadata. Do not infer the deployer is Roman Storm or a Roman-controlled wallet without external proof.
- The `tweetUrl` from `@rstormsf` is strong official acknowledgement/endorsement evidence. It should make the alignment `community-launched + endorsed`, not `self-launched`.
- Fee-claim status remains separate. Do not call fees claimed unless Bankr-native claim metadata, a claim transaction/event, or an explicit recipient statement proves it.
- Expected failure if output says `Alignment: self-launched`, `direct self-launch`, or `launched via Roman Storm's verified X account` solely because the fee recipient is `@rstormsf` or the Bankr `tweetUrl` is Roman's post.

## EPITAPH / Bankr Source Recovery and GitHub Check

Input:

```text
0x9d5D1Ff54980DFFAB23De58Cb3db2C1Acf2FbBA3
```

Expected classification:

- Bankr / Doppler launch. Bankr exact lookup returns token name `Epitaph AI`, symbol `EPITAPH`, website `https://www.epitaph-agent.xyz/`, metadata URI, deployer `@EpitaphAI` / `0x73474710fc64b2a3dcd175e759b1948ff3770293`, and fee recipient `@EpitaphAI` / same wallet.
- Dexscreener metadata may be empty. That is not a reason to stop after price/volume/holders. Pivot to Bankr `websiteUrl`, `tweetUrl`, `metadataUri`, and `@EpitaphAI`.
- The website exposes `https://github.com/Epitaph-AI/EpitaphAI`, `https://x.com/EpitaphAI`, Bankr, Base, and Virtuals links. GitHub must be inspected or marked unavailable with a blocker.
- The GitHub link is in the website resource/footer links, not necessarily in the hero text. Scoutr must extract raw `href`/HTML links from the website before saying GitHub is not discoverable.
- GitHub evidence: repo `Epitaph-AI/EpitaphAI`, created `2026-05-29T11:46:00Z`, pushed `2026-05-29T12:05:38Z`, Solidity/Hardhat project with `contracts/EpitaphCore.sol`, `test/EpitaphCore.test.js`, `package.json`, and README. It is launch-day fresh with no license detected by API, zero stars/forks, and README still lists contract addresses as `coming soon`.
- Code/Product should not be N/A. Score it as real but very fresh/unproven scaffold unless deeper tests/build/audit verify otherwise.
- Expected failure if the report only includes stats/security and omits Launch/Provenance, website/X/GitHub, source trace, or GitHub age/history.
- Expected failure if output says `GitHub/code: not found after checking website`, `GitHub not discoverable via first-party surfaces`, or `Code: N/A` while `https://www.epitaph-agent.xyz/` contains `https://github.com/Epitaph-AI/EpitaphAI`.
- Expected failure if `Website/docs:` is blank even though Bankr exact returned `https://www.epitaph-agent.xyz/`.
- Expected failure if `X/social:` or `Launch tweet:` is blank even though Bankr exact returned `https://x.com/epitaphai` and `@EpitaphAI`.
- Expected failure if output says `security: safe (bankr_deployed)` as though Bankr deployment alone verifies code/product/security beyond launch source.

## Brain / BRAIN Fee-Recipient Is Not Endorsement

Input:

```text
Brain / $Brain Bankr launch where Bankr metadata lists @BrainDotFi as fee recipient, while launcher/deployer is a different raw wallet or otherwise not proven to be @BrainDotFi
```

Expected classification:

- Bankr / Doppler launch source if Bankr exact lookup resolves.
- Fee recipient may be `@BrainDotFi`, but that alone is not endorsement.
- If `@BrainDotFi` has not claimed fees, posted the CA/ticker/token page, linked the Bankr/token page, or clearly acknowledged the exact token, classify as `please bro` or `pre-endorsement speculation`, not `community-launched + endorsed`.
- `Endorsement evidence` should be `none found` or name explicit token acknowledgement evidence. It must not say `fee recipient is the verified project X account` as endorsement evidence.
- Provenance should not be 9+ solely from Bankr launch plus official fee recipient.
- Verdict should be capped at `Watch` or cautious `Small Spec` while endorsement is unresolved, even if market/social/product quality is strong.
- Expected failure if output says `officially endorsed by the project team`, `official project endorsement via Bankr fee-recipient linkage`, or `Trade Candidate / High confidence` without explicit acknowledgement.
- Expected failure if `Website/docs:` or `X/social:` is blank while the report claims website/X were followed.
- Expected failure if token score/security cites `bankr_deployed` as proof of safety.

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

## Atrium Hermes / Bankr Exact Match + No Generic Unknowns

Input:

```text
https://bankr.bot/launches/0x61701f785fa8ff6ad1d4ad4ec5490cdbc910bba3
```

Expected classification:

- Bankr exact lookup resolves Atrium Hermes / ATRIUM as a Bankr / Doppler launch. Expected Bankr fields include token address `0x61701f785fa8ff6ad1d4ad4ec5490cdbc910bba3`, deployer `@Stevezach_man` / `0x9f7b8986f391ccdd7d7c70d516be6c60d6e5f92c`, fee recipient `@atriumhermes` / `0x12b9b3bb80380ff0e0c914a853b0da1614e49756`, `websiteUrl: https://atriumhermes.tech/`, `tweetUrl: https://x.com/atriumhermes`, pool ID `0x934358d8a9bee7f802c560c392ca9f11c846182f69c3efc926c7ab07e990859c`, and tx hash `0xf664a5ef2f2f8bda55336dd70604f8f56ef7ffddb20db5104b703c7a6beb3490`.
- Expected failure if report says Bankr exact lookup no match, `Launch source: Uniswap v4 / Custom`, or Virtuals no-match as primary provenance while the Bankr exact route is available.
- Dexscreener exact CA/token-pairs expose a canonical WETH pair with liquidity, FDV/market cap, 24h volume, pairCreatedAt, website `https://atriumhermes.tech/`, docs `https://atriumhermes.tech/docs`, and X `https://x.com/atriumhermes`. These should populate Sources and Market, not Unknowns.
- A `Watch` / Medium-confidence read can still be correct if endorsement is unresolved and repo/code is same-day fresh, but the reason should not be missing Bankr or market/source fields.
- Blank `Website/docs:` and `X/social:` are failures if website/docs/X were discovered or followed. Populate the actual URLs/handles or a checked-source blocker.
- `GitHub/code` should include the repo URL plus age/history note, not only `(Created: 2026-06-01)`.
- Expected failure if a launch-week or same-day Atrium GitHub jumps from low/early to `Code: 8+` without naming inspected tests/CI, substantial pre-launch history, and concrete code files. Bankr source recovery can fix missing source fields, but it must not automatically upgrade code quality.
- Expected failure if the report says `launch tweet verified` when the available Bankr `tweetUrl` is only `https://x.com/atriumhermes` or another profile/account URL rather than a specific token/CA/ticker post.
- Expected failure if the report returns `Trade Candidate / High confidence` while liquidity depth is unknown, holder concentration is unchecked, or provenance alignment depends on inferred deployer/fee-recipient control.
- If deployer `@Stevezach_man` and fee recipient `@atriumhermes` differ, do not call it `self-launched` unless a checked first-party source proves the deployer is controlled by the official project/team. Use `aligned`, `community-launched + endorsed`, or `pre-endorsement speculation` according to the explicit evidence.
- Expected failure if the report attaches Nous Research, `NousResearch/hermes-agent`, or 100k+ GitHub star metrics to Atrium unless a checked first-party Atrium/Nous source explicitly proves official ownership or endorsement. Atrium's website links `https://github.com/Atrium-Hermes/Atrium`; score that repo directly.
- Expected failure if the report says `@Stevezach_man` works for Nous, Atrium is the official Nous/Hermes token, or Atrium is backed by Nous based only on wording about Hermes compatibility or skill marketplaces.
- `Unknowns` should be concise and decision-changing, usually 1-2 bullets for this shape:
  - official CA/token acknowledgement not found;
  - holder concentration/admin-state unavailable if not directly checked.
- Do not list separate generic unknowns for liquidity lock, top holders, developer allocation, and actual app functionality if Market/Product/Red flags already state those limits.
- Product proof limited to landing/docs belongs in Product or Red flags, not repeated as `Actual functionality ... unknown`.
- `Would change my mind` should contain future evidence that upgrades the thesis, not duplicate every Unknown.

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
- Use Scoutr's built-in RepoScan-style scanner for repo trust/originality/similarity analysis. Do not call external paid scanners, x402 payment routes, or signature-gated scan APIs.
- If no credible token is found, output `Attached Token: not found` with checked routes and keep `Token: N/A`; do not invent market or launch provenance.
- Expected failure if the report only says "send a contract address", ignores the repo, or analyzes code without attempting attached-token discovery.

## Scoutr Command With GitHub Org URL

Input:

```text
scoutr https://github.com/ratspeak
```

Expected behavior:

- The dispatcher must invoke Scoutr because `scoutr <anything>` is valid, not only `scoutr <contract>`.
- Treat the full GitHub URL as the input payload.
- If the URL is an org/user rather than a repo, list/select relevant public repos before scoring code.
- Run Scoutr's built-in repo scanner on the selected repo; do not treat an org/user URL as a concrete repo without first choosing the relevant repo(s).
- Run attached-token discovery from GitHub profile, repo README/docs/package/homepage/social links, exact repo/org/package/domain searches, and launch-platform lookups.
- Output an `Attached Token` section even when no CA is found.
- Expected failure if there is no reply, if the GitHub URL is ignored, or if Scoutr asks for a contract address before inspecting GitHub.

## Reply-Style `scoutr this`

Input:

```text
scoutr this
```

Context:

```text
Reply target contains https://github.com/ratspeak
```

Expected behavior:

- Resolve `this` from the replied-to message/link preview/quoted text.
- Treat `https://github.com/ratspeak` as the primary payload.
- Use GitHub-first mode and include an `Attached Token` section.
- Include `Source trace: replied-to GitHub URL ...` or equivalent selected-input trace.
- Expected failure if Scoutr asks the user to paste the URL again, ignores the reply target, stays silent, or treats `this` as a ticker/project name.

## Duplicated Scoutr Command With GitHub Org URL

Input:

```text
scoutr scoutr https://github.com/ratspeak
```

Expected behavior:

- Strip duplicate leading `scoutr` tokens before routing.
- Analyze `https://github.com/ratspeak` as a GitHub org/user URL.
- Stay within compact GitHub-first budget: profile/top repos, README/top-level links, homepage metadata if present, and a few exact token-discovery checks.
- Return one compact report with `Attached Token` and `Unknowns`.
- Expected failure if the output says it hit a step limit, asks the user to split into smaller steps, asks for a CA before GitHub inspection, or tries to execute any transaction.

## Pass Criteria

- Verdict appears first.
- Bankr cases include launcher, fee recipient, alignment, and endorsement evidence.
- Social proximity never becomes endorsement by itself.
- Good GitHub/product proof is scored separately from token endorsement.
- Unknowns are explicit when Bankr-native tools, X search, holder data, or GitHub checks are unavailable.
- No output tells the user to buy, sell, hold, or trade.

## Fresh Launch Holder Count / Stale Snapshot

Input shape:

```text
Bankr/Doppler token launched minutes ago with high trade count and explorer holder count changing quickly.
```

Expected behavior:

- Holder count should include source and timestamp/age when available, such as `BaseScan showed 257 holders at <timestamp>`.
- Expected failure if a stale early holder count like `23 holders` is used later as a core red flag while current explorer metadata shows materially more holders.
- Expected failure if the report says `Confidence: High` while top-holder distribution is unchecked and holder count evidence is stale or contradictory.
- Holder count alone should not become `extremely concentrated`; concentration requires top-holder distribution, excluding pool/DEX/system addresses where possible.

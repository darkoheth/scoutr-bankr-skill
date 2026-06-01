# Scoring Rubric

Use 0-10 scores. Prefer integer or half-point scores. Scores are directional, not fake precision.

## Token Mechanics

- 8-10: healthy liquidity/volume, sane holder distribution, clear launch/deployer history, verified/simple contract, no major admin risk.
- 5-7: tradable but incomplete; moderate concentration, uneven volume, unclear launch path, or admin/source caveats.
- 2-4: thin liquidity, high concentration, suspicious deployer, unclear ownership, fake volume, or weak trading evidence.
- 0-1: honeypot/rug mechanics, malicious permissions, fake contract, active exploit, or impossible-to-sell reports.

## Launch Provenance

- 8-10: official launch source, official deployer/fee recipient alignment, community-launched token with clear official endorsement, or clear endorsement from project/team/person via fee claim, CA post, token-page link, and matching site/social links.
- 5-7: known launch platform and plausible links, but endorsement or fee routing is incomplete; fee recipient/project has strong code/product evidence but no explicit token claim.
- 2-4: `please bro` pattern, unclear deployer, mismatched links, unclaimed fee recipient, or launch appears to target a third party without confirmation.
- 0-1: impersonation, fake official claims, hostile fee routing, or explicit denial by the claimed project/person.

Bankr fee-recipient linkage is not endorsement. Treat `feeRecipient.xUsername`, fee-recipient wallet routing, Bankr `websiteUrl`, or social/profile linkage as provenance context only. It can explain why traders are watching, but it does not complete the endorsement check unless the fee recipient/project claims fees, posts the CA/ticker, links the Bankr/token page, or clearly acknowledges the exact token from an official channel.

When deployer/launcher differs from fee recipient and explicit acknowledgement is missing, provenance normally belongs in the 2-6 range depending on source quality and social proximity. Do not score Provenance 8+ or return `Trade Candidate` solely because the fee recipient is a verified/official project account.

For Bankr tokens, do not penalize unclaimed fees much when the launcher/deployer and fee recipient appear to be the same official party. Penalize unclaimed fees mainly when the launcher/deployer and fee recipient differ and the fee recipient has not otherwise acknowledged the token.

Launcher/deployer and fee-recipient equality can support `self-launched` alignment only when they appear to be the official project/person or the same controlled party. If the token was deployed by a community or third-party launcher for a project, do not call it self-launched. Reserve `endorsed` for explicit public evidence: fee claim, CA post, token-page link from the claimed account/site, or clear acknowledgement. A community-launched token with later official acknowledgement should be scored as `community-launched + endorsed`. Fee-claim status should still be reported separately; unclaimed/unknown fees can cap confidence or sizing without erasing endorsement from a clear CA acknowledgement.

Bankr social proximity can slightly improve confidence or Watch priority, but should not by itself lift Provenance into official/aligned territory. Direction matters. A post-launch follow/reply/quote/like from the fee recipient/dev toward `@igoryuzo`, `@0xDeployer`, or an explicit third-party Bankr/community support prompt is stronger than `@igoryuzo` or `@0xDeployer` following the dev. Both are weaker than fee claiming, CA posting, or linking the token page.

Official product posts and Bankr event evidence should be scored on the right axis. A same-day post by the fee recipient/project about the underlying product can raise Social/Product scores. A scheduled Bankr Agent Hour appearance can raise Provenance confidence as Bankr relationship evidence. Neither should be described as token endorsement unless it explicitly references the token, CA, ticker, Bankr launch page, or fee claim.

## Social / X

- 8-10: credible account/team, real discussion, quality replies/quotes, organic momentum, consistent claims.
- 5-7: some real activity but early, small, botted, or not yet proven.
- 2-4: mostly shills/bots, thin account history, vague team, inconsistent messaging.
- 0-1: impersonation, compromised account signals, active scam reports, or obvious fake engagement.

For Bankr `please bro` launches, include a social-proximity note when the fee recipient/dev recently follows or engages with Bankr launch-team accounts such as `@igoryuzo` and `@0xDeployer`, or likes/replies/quotes a visible third-party prompt asking Bankr/community to support the project. Prioritize fee recipient/dev-initiated engagement. This supports a "possible future endorsement" thesis, not a completed endorsement.

## Code / GitHub

- 8-10: real code, tests, passing CI, clean docs, and organic repo/org history that clearly predates the token launch.
- 5-7: useful repo but early, partial tests, minor CI/build problems, rough docs, or short-but-plausible development history.
- 2-4: launch-day repo/org, single code dump, broken build, no tests, mismatch between claims and code, or polished docs without meaningful age/history.
- 0-1: empty repo, malware, leaked secrets, fake code, or severe security issue.

For Bankr `please bro` launches, a strong fee-recipient GitHub can raise Code/Product scores, but should not raise Provenance above incomplete/unendorsed unless there is explicit token endorsement.

Age weighting: repo/org age is a major input, not trivia. Prefer evidence of sustained work over surface polish. A fresh repo can still be useful, but should not score like a project with months or years of coherent development. If a report cites GitHub/code, it should state what was checked about age/history or explicitly say age/history was not checked.

Score caps:

- Same-day or launch-week repo/org with no directly checked tests/CI and no meaningful pre-launch history: cap Code at 4.
- Fresh repo with meaningful inspected code but no checked tests/CI and little history: cap Code at 6.
- Multiple contributors, active commits, or clear project structure do not justify Code 8+ by themselves. Code 8+ requires inspected substance plus tests/CI or equivalent verification and organic history that predates the token launch.
- If the report cannot name what files/tests/CI/history were checked, Code must stay at 5 or below and confidence cannot be High because of code quality.
- If the report uses GitHub metrics from a repo other than the exact first-party linked repo/org, the Code score is invalid. Adjacent upstreams, dependencies, forks, compatible runtimes, or projects with similar names cannot be used for stars/forks/history unless first-party evidence identifies them as the official project repo.

Discovery weighting: before assigning `Code: N/A` or saying no GitHub was found, follow first-party links from token metadata/Dexscreener, Bankr, X bio, website, docs nav/footer, and package/docs references. Missing an obvious official GitHub from those surfaces should be treated as a failed code check, not evidence that no repo exists.

Do not let the report end with GitHub as an unchecked next step when a first-party GitHub URL is visible. If found, inspect it and score Code from repo/org evidence. If inspection is blocked by tool/runtime limits, cap confidence at Medium and state the exact blocker plus discovered URL.

## Product / Website

- 8-10: app works, docs align, no suspicious wallet behavior, real utility visible.
- 5-7: plausible beta, rough edges, limited proof.
- 2-4: mostly marketing, broken app/docs, suspicious UX, thin team/contact evidence.
- 0-1: phishing, malicious wallet prompts, obvious fake site, private-key asks.

## Overall Verdict

- `Pass`: any hard safety failure, or overall below 4.
- `Watch`: overall 4-5.9, confidence is low because key evidence is missing, or a Bankr token has unresolved `please bro` provenance.
- `Small Spec`: overall 6-7.4 with no hard safety failures, but meaningful risk remains.
- `Trade Candidate`: overall 7.5+ with at least three independent green flags and no unresolved major red flags.

Unresolved third-party Bankr launches are a major provenance red flag. If the launcher/deployer differs from the fee recipient and no direct fee claim, CA post, token-page link, or clear acknowledgement exists, cap the verdict at `Watch` or cautious `Small Spec` even when market/social/product scores are strong.

Do not return `Trade Candidate` when any of these remain true: liquidity is unknown, holder concentration/top-holder distribution was not checked, provenance alignment is inferred from routing rather than explicit control/acknowledgement, or Code/Product 7+ is unsupported by named inspected evidence. In those cases, cap at `Watch` or `Small Spec` and make the cap visible in `My read`.

Do not raise Provenance, Social, Product, or Overall because of an assumed affiliation with a prominent lab/company. Employment, ownership, official token status, and endorsement require direct checked evidence from the named party or project-controlled source.

Confidence:

- `High`: primary sources inspected across token, social, and code/product.
- `Medium`: enough sources for a directional verdict, but at least one major axis is partial.
- `Low`: limited inputs, source outage, ambiguous ticker, or important checks unavailable.

## Numeric Evidence

Scores should degrade when important fields are unknown. Do not fill missing values with estimates from "typical" pools or inferred ratios. Unknown liquidity, unchecked top-holder concentration, or unavailable admin/role state should be named as unknowns and should cap confidence at Medium unless the user requested a very fast read.

Do not overfit the `Unknowns` section. If several numeric market checks are unavailable, collapse them into one material blocker and let the score/confidence carry the penalty. Unknowns should explain the verdict cap, not enumerate a full future audit checklist.

Fresh-launch holder counts can lag. Do not heavily penalize a launch from an old holder snapshot when current explorer metadata or trading activity shows distribution is changing quickly. Use the freshest count with timestamp/source, and score concentration from actual top-holder distribution when available rather than holder count alone.

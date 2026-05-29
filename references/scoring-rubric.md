# Scoring Rubric

Use 0-10 scores. Prefer integer or half-point scores. Scores are directional, not fake precision.

## Token Mechanics

- 8-10: healthy liquidity/volume, sane holder distribution, clear launch/deployer history, verified/simple contract, no major admin risk.
- 5-7: tradable but incomplete; moderate concentration, uneven volume, unclear launch path, or admin/source caveats.
- 2-4: thin liquidity, high concentration, suspicious deployer, unclear ownership, fake volume, or weak trading evidence.
- 0-1: honeypot/rug mechanics, malicious permissions, fake contract, active exploit, or impossible-to-sell reports.

## Launch Provenance

- 8-10: official launch source, deployer/fee recipient alignment, or clear endorsement from project/team/person via fee claim, CA post, token-page link, and matching site/social links.
- 5-7: known launch platform and plausible links, but endorsement or fee routing is incomplete; fee recipient/project has strong code/product evidence but no explicit token claim.
- 2-4: `please bro` pattern, unclear deployer, mismatched links, unclaimed fee recipient, or launch appears to target a third party without confirmation.
- 0-1: impersonation, fake official claims, hostile fee routing, or explicit denial by the claimed project/person.

For Bankr tokens, do not penalize unclaimed fees much when deployer and fee recipient match. Penalize unclaimed fees mainly when deployer and fee recipient differ and the fee recipient has not otherwise acknowledged the token.

Deployer/fee-recipient equality can support `self-launched` alignment, but it is not enough by itself to call the launch `endorsed`. Reserve `endorsed` for explicit public evidence: fee claim, CA post, token-page link from the claimed account/site, or clear acknowledgement.

Bankr social proximity can slightly improve confidence or Watch priority, but should not by itself lift Provenance into official/aligned territory. Direction matters. A post-launch follow/reply/quote/like from the fee recipient/dev toward `@igoryuzo`, `@0xDeployer`, or an explicit third-party Bankr/community support prompt is stronger than `@igoryuzo` or `@0xDeployer` following the dev. Both are weaker than fee claiming, CA posting, or linking the token page.

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

Age weighting: repo/org age is a major input, not trivia. Prefer evidence of sustained work over surface polish. A fresh repo can still be useful, but should not score like a project with months or years of coherent development.

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

Confidence:

- `High`: primary sources inspected across token, social, and code/product.
- `Medium`: enough sources for a directional verdict, but at least one major axis is partial.
- `Low`: limited inputs, source outage, ambiguous ticker, or important checks unavailable.

## Numeric Evidence

Scores should degrade when important fields are unknown. Do not fill missing values with estimates from "typical" pools or inferred ratios. Unknown liquidity, unchecked top-holder concentration, or unavailable admin/role state should be named as unknowns and should cap confidence at Medium unless the user requested a very fast read.

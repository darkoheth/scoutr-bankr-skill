# Scoring Rubric

Use 0-10 scores. Scores summarize checked evidence; they do not replace it.

## Token

- 8-10: strong live liquidity/volume, healthy checked distribution, clear mechanics.
- 5-7: tradable but incomplete or moderately risky.
- 2-4: thin liquidity, weak volume, high concentration, or unclear mechanics.
- 0-1: active exploit, honeypot, fake contract, or severe safety failure.

Unknown or estimated liquidity, unchecked concentration, or conflicting market sources cap Token at 6 and confidence at Medium.

## Provenance

- 8-10: official/aligned launch or exact-token endorsement with strong proof.
- 5-7: known platform and plausible links, but some control/claim evidence is incomplete.
- 2-4: unresolved third-party `please bro`, unclear deployer, or mismatched claims.
- 0-1: impersonation, hostile routing, fake official claims, or explicit denial.

Mechanical cap: deployer differs from fee recipient and no exact-token acknowledgement/fee claim is cited -> Provenance <= 6, verdict <= `Watch`, confidence <= `Medium`.

## Social

- 8-10: credible official accounts and organic, relevant discussion.
- 5-7: real but early, small, or uneven activity.
- 2-4: mostly shills/bots, thin history, or inconsistent messaging.
- 0-1: impersonation, compromise, or obvious fake engagement.

## Code

- 8-10: literal first-party GitHub URL, inspected substantive code, tests/CI or equivalent verification, and organic history.
- 5-7: useful inspected repo with limited tests/history or minor problems.
- 2-4: launch-day dump, placeholder/template, broken build, or no tests.
- 0-1: empty/fake/malicious repo or leaked secrets.

If no literal GitHub URL was inspected, Code <= 6. Founder reputation, repo count, docs, or an `(active org)` label cannot justify a high score.

## Product

- 8-10: working product and docs matching claims.
- 5-7: plausible beta or limited proof.
- 2-4: mostly marketing, broken app/docs, or thin evidence.
- 0-1: phishing, malicious wallet behavior, or obvious fabrication.

## Verdict

- `Pass`: hard safety failure or overall below 4.
- `Watch`: overall 4-5.9, unresolved `please bro`, or important evidence incomplete.
- `Small Spec`: overall 6-7.4 with meaningful remaining risk.
- `Trade Candidate`: overall 7.5+ with strong current market structure, at least three independent green flags, and no major unresolved blocker.

Never return `Trade Candidate` when liquidity is unknown/estimated, concentration is unchecked, deployer control is inferred, code claims lack an inspected URL, or structured values conflict.

## Confidence

- `High`: primary sources checked across market, provenance, and product/code.
- `Medium`: directional evidence exists but at least one major axis is partial.
- `Low`: ambiguous identity/ticker, limited sources, or major tool outage.

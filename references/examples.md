# Examples

## Token Identity

User:

```text
What is this coin? I don't see factory info.
<contract>
<Dexscreener URL>
```

Expected response:

- Identify token/project, chain, ticker, main pair, launch time, site/social links.
- Explain launch provenance: known factory, DEX-native pool, custom deployer, or unknown.
- Give a compact verdict and biggest unknowns.

## Full Launch Triage

User:

```text
Use scoutr on this launch:
<contract>
<X URL>
<website>
<GitHub URL>
```

Expected response:

- Use the report template.
- Score token, social, code, product, and overall.
- Make the trade posture practical.
- Include what would change the verdict.
- For Bankr launches, always include launcher, fee recipient, launcher/recipient alignment, fee-claim or CA-post status, and whether the launch is self-launched, aligned, community-launched + endorsed, pre-endorsement speculation, or `please bro`.

## GitHub/Product Check

User:

```text
How does this GitHub look for this token/project?
<repo URL>
<token or website>
```

Expected response:

- Repo status: age, activity, README quality, code reality, tests/CI/build, security concerns.
- Product match: does the repo support the project's claims?
- Avoid running project scripts unless explicitly approved.
- Verdict should account for code/product proof, not just market data.

## GitHub-Only Scoutr Invocation

User:

```text
scoutr https://github.com/ratspeak
```

Expected response:

- Invoke Scoutr even though there is no contract address.
- Treat the GitHub URL as the primary input payload.
- If the URL is an org/user, identify relevant repos before scoring.
- Score GitHub/code first, then search repo/profile/homepage/docs/package/social routes for attached token candidates.
- Include `Attached Token: confirmed`, `likely`, `possible`, `not found`, or `unavailable: <blocker>`.
- Never stay silent and never reply only with a request for a contract address.

Also handle duplicated command prefixes:

```text
scoutr scoutr https://github.com/ratspeak
```

Expected response:

- Strip the extra leading `scoutr`.
- Analyze `https://github.com/ratspeak` using the same compact GitHub-only flow.
- Do not fail with a step-limit message; return the best compact report with explicit Unknowns.

## Response Tone

Good:

```text
Verdict: Watch
Confidence: Medium

What it is:
...

Bankr / Provenance:
- Launch source: Bankr
- Launcher/deployer: @example / 0x...
- Fee recipient: @target / 0x...
- Alignment: please bro
- Endorsement evidence: none found

My read:
Interesting, but not clean enough to size casually. The market data is strong for a fresh launch, but mint/admin state and holder concentration still need verification.
```

Avoid:

```text
This is definitely safe.
This will pump.
Buy/sell now.
```

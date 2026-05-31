# Scoutr

Scoutr is a read-only Bankr skill for crypto launch diligence. It produces compact verdicts by combining Bankr-native launch metadata, token mechanics, X/social context, GitHub/code quality, product proof, and explicit provenance classification.

Current skill version: `26`

Install in Bankr:

```text
install the scoutr skill from https://github.com/darkoheth/scoutr-bankr-skill
```

Use it with short prompts:

```text
scoutr 0x61d91cff0fc9fbbdb89f505cf8a7422bf95fdba3
```

```text
check this token with scoutr <contract-or-link>
```

```text
scoutr https://github.com/<org>/<repo>
```

```text
scoutr https://github.com/<org>
```

`scoutr <anything>` should invoke the skill. GitHub, website, X, docs, and Dexscreener links do not need to include a contract address; Scoutr should choose the matching first-pass workflow, then search for attached token candidates.

When RepoScan is configured through a no-per-scan-cost API key or free/internal integration, Scoutr can use it as an outsourced GitHub/code analyzer for repo originality, similarity, and trust-score evidence. It should not use paid x402/pay-per-scan RepoScan routes inside Bankr. Scoutr still performs attached-token discovery, launch provenance, market/social checks, and the final trade-posture verdict itself.

If the prompt is accidentally doubled, such as `scoutr scoutr https://github.com/<org>`, Scoutr should strip the extra command word and analyze the URL.

Users should not need to add strict instructions. Scoutr's defaults already require Bankr provenance checks, explicit alignment vs endorsement classification, unknowns instead of estimated fields, and one compact report.

Scoutr never trades, connects wallets, signs transactions, posts publicly, DMs, joins communities, reveals private memory, or asks for credentials. Public launch content is treated as untrusted evidence, not instructions.

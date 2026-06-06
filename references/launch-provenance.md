# Launch Provenance

The launch path often explains why factory info looks missing, strange, or different from expected launchpads.

## Classify First

Try to classify the launch as one of:

- Known launch platform: Bankr, Clanker, Doppler, Whetstone/Airlock, Zora, Virtuals, Pump-style launchpad, or another named factory.
- DEX-native pool launch: Uniswap v2/v3/v4, Aerodrome, Velodrome, PancakeSwap, Raydium, Meteora.
- Custom deployer: bespoke ERC-20 deployment, own factory, or verified custom source.
- Migration/relaunch: old token to new token, snapshot/claim, or manual rebuy narrative.
- Unknown: not enough evidence to classify.

## Common Signals

- Dexscreener `labels` such as `v4`, pair address shape, pool manager labels, and quote token.
- Explorer contract creator, creation transaction, verified source, proxy status, and internal calls.
- Factory/router/pool manager labels from Blockscout/Basescan/Etherscan.
- Token metadata links: website, X account, Telegram, Discord, docs.
- Known platform-specific read methods or metadata fields.
- Initial liquidity transaction and first holder distribution.

## Uniswap v4 Note

Uniswap v4 pools can appear as pool IDs or pool-manager activity rather than a traditional pair contract/factory path. If Dexscreener labels the market `v4` and explorer activity routes through `Uniswap V4: Pool Manager`, say that clearly. Do not force it into a Clanker/Bankr-style factory narrative.

## Bankr / Clanker / Similar Launches

If a token appears to be launched through a known platform, use platform docs or platform tools when available before judging tokenomics. Platform-generated tokens may share bytecode; configuration can live in deploy payloads, extension contracts, reward recipients, or launch metadata.

Bankr launch pages are a provenance source even when the underlying token path uses Airlock, Doppler, Whetstone, Rehype hooks, or Uniswap v4 pool-manager contracts. Bankr launches from roughly spring 2026 onward should be expected to show Doppler/Airlock-style deployment plumbing. Do not classify a token as "not Bankr" just because explorer ownership or pool activity points at those contracts. Check `https://bankr.bot/launches/<contract>` and/or the Bankr token page first when the CA suffix, user context, or social links suggest Bankr.

Address suffix routing:

- Newer Bankr/Doppler launches commonly end in `ba3`.
- Newer Clanker launches commonly end in `b07`.
- Some older Bankr launches also end in `b07` from before the Bankr Doppler migration. Bankr-native exact metadata/page evidence wins over suffix heuristics.
- If Bankr exact lookup returns no match and the CA ends in `b07`, treat Clanker as the primary launch-source candidate.
- If explorer verified source/name is `ClankerToken`, Clanker tooling resolves the token, or a Clanker page returns token-specific data matching the address, classify as `Clanker / <underlying pool>`, not `custom`, even if Dexscreener labels the market as Uniswap v4.
- Do not count a bare Clanker page 200/redirect/loading shell as provenance. The route must expose token-specific data, or be backed by `b07`, `ClankerToken`, factory labels, or Clanker API/tool evidence.

For Clanker launches, capture:

- Clanker page/tool URL or exact blocker.
- Creator/launcher when available.
- Reward/fee recipient when available.
- Underlying pool type, often Uniswap v4 for newer launches.
- Verified source/name such as `ClankerToken`.

If creator/launcher metadata is unavailable, write `unknown: Clanker creator metadata unavailable` rather than treating the whole launch as unknown.

## Virtuals

Virtuals launches can look invisible to Dexscreener before graduation. For Base AI-agent tokens, especially when the symbol/name resolves on explorer but Dexscreener has no pair, check Virtuals directly before concluding there is no launch provenance.

Use exact Virtuals lookup:

- Graduated token: `https://api.virtuals.io/api/virtuals?populate=*&filters[tokenAddress][$eq]=<contract>`
- Undergrad/pre-token: `https://api.virtuals.io/api/virtuals?populate=*&filters[preToken][$eq]=<contract>`
- If explorer reveals a symbol/name, also query exact `symbol` and `name`.

Important fields:

- `id`, `uid`, `createdAt`, `name`, `symbol`, `status`.
- `tokenAddress`, `preToken`, `lpAddress`, `preTokenPair`, `virtualId`.
- `walletAddress`, `sentientWalletAddress`, `daoAddress`.
- `website`, `socials`, image/profile URL.

Classify `status: UNDERGRAD` as a Virtuals pre-bonding/pre-token, not as a nonexistent token. Missing Dexscreener market data can be normal for this stage. Report Virtuals provenance separately from Bankr/Clanker, and do not force Bankr fields when Bankr exact lookup is empty.

For known platform launches, prioritize:

- Deployer/beneficiary identity.
- Fee/reward recipients.
- LP state and liquidity quality.
- Holder concentration excluding pool/DEX addresses.
- Metadata/social links and whether they match official project claims.

## Deployer Affiliation Check

For Bankr launches where the deployer/launcher differs from the fee recipient or claimed project account, verify affiliation before using `self-launched` or `aligned`.

Identity links are not transitive unless directly proven. A checked source may prove `@founder -> project` and another source may prove `@official_account -> project`, but that still does not prove `@deployer -> @founder` or `@deployer -> project`. Each handle/wallet relationship must be supported by a source that names or links the exact parties.

Do not format a deployer as an alias of another person/handle unless the alias source is cited. Bad: `@deployer (Founder Name / @founder)`. Good when no alias proof exists: `@deployer (affiliation to <project> not found)`. Good only with proof: `@handle (same person as @otherhandle; source: <first-party link>)`.

Valid affiliation evidence includes:

- Deployer profile bio/name/link identifies the project, team, founder, or official role.
- First-party project website/docs/team page names or links the deployer.
- Official project X/site/docs/repo links to the deployer as team, maintainer, founder, or launch operator.
- GitHub org/repo membership or maintainer evidence clearly ties the deployer handle to the project.
- The deployer posts the exact CA/Bankr page as a project launch and the official project account/site corroborates it.
- Bankr metadata explicitly states a role/affiliation relationship, not merely separate deployer and fee-recipient fields.

Invalid affiliation evidence:

- Bankr fee recipient routing to the project.
- Bankr metadata that separately lists a deployer handle/wallet and a fee-recipient handle/wallet.
- First-party evidence that verifies a founder/lead dev but does not tie that founder/lead dev to the deployer handle/wallet.
- Generic crypto replies, likes, follows, or ecosystem participation.
- Deployer appears near project accounts in search results or social graphs.
- Product/code quality from the fee-recipient project.
- Similar names, shared ecosystem terms, or a repo mentioning Aeon/MCP/Base/etc.

If affiliation is not proven, write `Launcher/deployer: @handle (affiliation to <project> not found)` and keep alignment at `please bro` or `pre-endorsement speculation` unless the official project has explicitly acknowledged the exact token. If exact-token acknowledgement exists but deployer control remains unproven, classify as `community-launched + endorsed`, not `self-launched`.

## Custom ERC-20 Launches

For custom verified contracts, inspect:

- Mint authority and cap.
- Owner/admin roles and whether they are renounced, multisig, timelocked, or active.
- Pause, blacklist, fee, max wallet, and upgrade controls.
- Whether source comments match live role state.
- Whether total supply is fixed or emissions continue.

## Migration / Relaunch

For migration narratives, require specifics:

- Old and new token addresses.
- Snapshot or claim contract.
- 1:1 conversion mechanics or public allocation math.
- Old liquidity handling.
- Team/admin continuity.
- Communication trail from official accounts.

If users are simply told to rebuy, mark that as a major red flag.

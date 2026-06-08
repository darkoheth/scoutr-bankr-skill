# Bankr Tooling

Scoutr should use Bankr-native X/search/social tools as the default social-research path when running inside Bankr. Do not bundle API keys, paid credentials, cookies, or private tokens.

Inside Bankr, Bankr-native launch/token metadata is the primary provenance source. If the Bankr runtime, token page, or `/launches/<contract>` record identifies a contract as a Bankr launch, treat it as Bankr first and use explorer/Dexscreener/Doppler/Airlock evidence only as mechanics and configuration context. Outside Bankr, manually check `https://bankr.bot/launches/<contract>` when the user context, CA suffix, or social links suggest Bankr. If the user supplies a Bankr launch URL directly, extract the contract from the URL and query the exact Bankr API before any non-Bankr classification.

## Preferred Bankr-Native Calls

Use these tools when available in the Bankr runtime:

- `get_token_launch_info`: exact launch metadata for Bankr/Doppler/Clanker-style tokens. Try this first for any EVM contract before inferring launch provenance from explorer labels.
- `token_search`: baseline token/market lookup by contract address. Use it for chain, ticker, market data, and token metadata links; do not rely on sentiment-only tools for source discovery.
- `get_token_market_data`: Bankr-native market snapshot when available. Use it first for FDV/volume/holders, but treat missing `liquidity` or `primary pair` as incomplete and fall back to exact Dexscreener/GeckoTerminal before the final report.
- `search_tool`: broad web/search pass for project name, ticker, contract address, founder handles, scam/rug terms, investigator mentions, docs, and launch announcements.
- `get_social_sentiment_for_ticker`: ticker-level social sentiment and surfaced allegations when the token has a clear symbol.
- `browse_url`: targeted reads of official project websites, docs, GitHub pages, and official X/Twitter pages when direct page extraction is useful.

If a Bankr tool is unavailable, blocked, rate-limited, or the user is not eligible for it, fall back to public web/search/explorer checks and lower confidence. Do not ask the user for API keys unless they explicitly want to connect their own account.

## CA-Only Metadata Recovery

When the user supplies only a contract address, do not rely on social sentiment or generic search alone. Recover structured token links first:

1. Query Dexscreener by exact CA:
   - `https://api.dexscreener.com/latest/dex/search?q=<contract>`
   - `https://api.dexscreener.com/token-pairs/v1/<chain>/<contract>` when chain is known.
2. If Dexscreener is unavailable or incomplete, query GeckoTerminal exact token/pools for the same chain.
3. Choose the canonical pair by real liquidity/volume. If one pair has meaningful liquidity and others have tiny liquidity or impossible prices, use the meaningful pair for source links and market fields.
4. If Bankr-native market data returned FDV/volume/holders but no liquidity or primary pair, this fallback is mandatory before the report may say `liquidity unknown`.
5. Extract `info.websites` and `info.socials`. Treat these as first-party source candidates unless they are clearly malicious/mismatched.
6. Browse or search those exact URLs before claiming no website, docs, X, or GitHub exists.
7. If the token data source has a docs URL, inspect docs nav/footer and page links for GitHub; docs often link the repo when Dexscreener does not.
8. If Dexscreener has no useful website/social links, pivot to Bankr exact launch metadata and social profiles:
   - Use Bankr `websiteUrl`, `tweetUrl`, and `metadataUri` first when present.
   - Inspect the fee recipient X profile for bio links, pinned posts, recent project posts, docs, GitHub, and official website links.
   - Inspect the launcher profile when it may identify the project or launch context, but do not treat launcher links as official project links unless they match the fee recipient/project.
   - Search exact `tokenName`, `tokenSymbol`, fee-recipient handle, and discovered project names with `GitHub`, `docs`, `website`, and the CA.

If Dexscreener or the token data source returns official links, the report must not say `not found after checking token metadata` for those same link types. It should either include the URLs or say the exact tool/runtime blocker that prevented inspection.

If Dexscreener returns no links, the report must not conclude `no website`, `no X`, or `no GitHub` until the Bankr fee-recipient social fallback has been checked or explicitly marked unavailable.

If Bankr-native market data omits liquidity or the primary pair, the source trace must say which fallback was checked, for example `Bankr get_token_market_data returned FDV/volume/holders but no liquidity; Dexscreener exact token-pairs supplied primary WETH pair and liquidity`. Do not leave the omission invisible.

## Unendorsed Target-Project Discovery

For `please bro` and `pre-endorsement speculation`, keep two tracks separate:

- Token provenance: whether the exact token was launched/endorsed by the claimed project.
- Target project quality: whether the project being targeted is real and has product/code/social proof.

An unendorsed token can still point at a real project. Do not collapse Code/Product to N/A just because endorsement is missing. After Bankr/Dex metadata, run target-project discovery from:

- token name and symbol
- fee-recipient X handle/display name
- Bankr `websiteUrl`, `tweetUrl`, and `metadataUri`
- official X bio/profile links, pinned/recent posts, and founder/team names
- exact project-name searches with `GitHub`, `docs`, `website`, and product keywords
- first-party website raw links for `github.com`, docs, Discord, X/Twitter, npm/package names, or app/download links

If target-project GitHub/product evidence is found, report it as `Target project GitHub/Product`, not as token endorsement. If the report says `GitHub/code: not found`, it must name the target-project discovery routes checked.

## Default Rule For Dexscreener Social Links

When Dexscreener or another token data source provides an official X/Twitter link:

1. Treat that link as a required social source.
2. Use Bankr-native X/search/social tooling first to inspect the profile, launch post, quote/reply quality, account age, follower count, and engagement.
3. If public web fetch returns a generic X error page, login wall, or empty result, do not stop. Escalate to Bankr-native X/search tooling or mark the X check as unavailable.
4. Only use public search/fetch as fallback or for corroboration.
5. If the X check cannot be completed, explicitly put that in `Unknowns` and lower confidence.

## Social Pass

For token/project diligence, run the social pass before the final verdict:

1. Search official sources:
   - project name
   - ticker and cashtag
   - contract address
   - official X handle
   - founder/team handles
   - official X handle plus exact endorsement terms: `fees`, `claim`, `claimed`, `support`, `supporting`, `thank you`, `thanks`, `Bankr`, `token`, `launch`, and the exact CA

2. Search negative/context terms:
   - `<ticker> scam rug honeypot exploit fake`
   - `<project name> scam rug exploit fake`
   - `ZachXBT <ticker or project>`
   - `<ticker> investigation delist manipulation`

3. Use `get_social_sentiment_for_ticker` when the ticker is unambiguous. Treat it as one input, not the whole verdict.

4. Browse official X/social pages only to verify claims and recent project messaging. Do not post, reply, like, follow, or DM.

## Output Handling

Report social findings as evidence:

- credible accounts discussing it
- obvious bot/shill behavior
- official account quality and consistency
- negative chatter or investigator/CEX flags
- whether social claims match token/code/product reality

If social tooling is unavailable, say so in `Unknowns` and lower confidence instead of pretending the check was completed.

Before final output, preserve the exact Bankr launch fields:

- `Launcher/deployer` must come from Bankr/explorer deployer metadata, not from the token CA, pool, fee-recipient wallet, holder list, or inferred founder wallet.
- `Fee recipient` must come from Bankr fee-recipient metadata when available.
- If deployer and fee recipient differ, do not call the launch `self-launched` unless a checked first-party source explicitly proves deployer control by the project/person.
- If the only official/source evidence is a product tweet, app announcement, website, docs, GitHub, or fee-recipient routing, provenance remains `please bro` or `pre-endorsement speculation`.
- If exact-token acknowledgement exists but deployer control remains unproven, use `community-launched + endorsed`, not `self-launched`.
- Never write `Fee-claim status: likely claimed`; use `claimed` only with direct claim proof. A founder CA post, social confirmation, or Bankr community appearance proves endorsement/context only, not fee claiming.
- Source lines must preserve actual URLs/handles. Do not replace `Website/docs`, `X/social`, or `GitHub/code` with empty markdown labels such as `(Official)` or `(Active repo)`.

## Bankr Token Page / Please Bro Check

Many scanned tokens will be Bankr launches. When the token appears to be from Bankr, inspect the Bankr token page before the verdict.

When running as a Bankr skill, do not force Scoutr to infer Bankr provenance from bytecode or explorer labels if Bankr already exposes the launch record. The Bankr record wins for launch-source classification; the follow-up question is whether the launch is aligned/self-launched, endorsed, pre-endorsement speculation, or a `please bro`.

Use exact Bankr launch lookup when available:

- `https://api.bankr.bot/token-launches/search?q=<contract>`
- If the response includes `exactMatch`, use it before explorer inference.
- For user-supplied Bankr launch URLs or newer `ba3` CAs, retry the exact API lookup with normalized lowercase and original input casing before writing no-match.
- Important fields: `launchType`, `tokenName`, `tokenSymbol`, `chain`, `tokenAddress`, `poolId`, `txHash`, `deployer.walletAddress`, `deployer.xUsername`, `feeRecipient.walletAddress`, `feeRecipient.xUsername`, `tweetUrl`, `websiteUrl`, `metadataUri`, and `timestamp`.
- If the API is unavailable but `https://bankr.bot/launches/<contract>` opens only the app shell, do not treat the app shell as a negative result. Mark Bankr metadata unavailable by browser/app-shell blocker and continue with Dexscreener/explorer evidence.

Bankr can launch through Airlock/Doppler/Whetstone/Rehype/Uniswap v4 infrastructure. For Bankr launches from roughly spring 2026 onward, Doppler/Airlock-style deployment plumbing should be treated as normal rather than contradictory. Explorer evidence like an Airlock owner, Doppler hook initializer, Rehype hook, or Uniswap v4 Pool Manager is compatible with Bankr launch provenance. Treat the Bankr `/launches/<contract>` or token page as the Bankr-specific metadata layer, then evaluate deployer/launcher, fee recipient, tweet, and endorsement status from that page.

Capture:

- Bankr token page URL.
- Contract address, chain, ticker, and linked socials/site.
- Deployer address/account.
- Fee recipient address/account.
- Whether launcher/deployer and fee recipient match, and whether that launcher is the official project/person or a community/third-party account.
- Whether the fee recipient/project has claimed fees, posted the CA, linked the token page, or otherwise clearly acknowledged the token.
- Fee-claim evidence from on-chain routes when Bankr metadata does not expose a claim status. Inspect recent fee-recipient wallet transfers/transactions and launch infrastructure such as Doppler/Airlock hook initializer, pool manager, or fee collector transfers. A claim can arrive as WETH, USDC, EURC, the launched token, or another routed fee asset.
- First-party website/docs/GitHub token pages. Search official repos/sites for exact CA, Bankr page, `community-token`, `token`, `fees`, `fund`, `claim`, and similar paths before saying there is no exact-token acknowledgement.
- Whether the official fee recipient/project account replied to or quoted a post containing the exact CA, Bankr page, or ticker-as-token with language accepting support, thanking supporters, or saying it will use token fees. Count this as exact-token soft endorsement, not fee claiming.
- Whether fee-recipient linkage is only routing/context. A fee recipient handle/wallet, project website, or official social link is not endorsement by itself.
- Fee-claim status as its own field: claimed, unclaimed, unknown, or not applicable.
- Whether the fee recipient/project recently posted about the underlying product/project, even if the post does not mention the token.
- Whether any claimed founder/lead-dev tweet used as endorsement actually mentions or links the exact CA, Bankr page, ticker-as-token, fee claim, or token context. If it is only a product/app/repo announcement, count it as Product/Social evidence only.
- Whether the fee recipient/project is scheduled for, appeared on, or was promoted by a Bankr show/event such as Bankr Agent Hour.
- Whether the fee recipient/dev recently followed or engaged with Bankr launch-team accounts after token launch, especially `@igoryuzo` and `@0xDeployer`, and which direction the interaction happened.
- Whether the fee recipient/dev liked, replied to, or quoted third-party replies that explicitly mention Bankr support, token support, the CA, ticker, or the Bankr community around the target/project.
- Whether those interactions include exact-token fee language from the official account, such as "we will use the fees" or "thank you for supporting us" in a reply/quote context containing the exact CA. If yes, treat as acknowledgement, not mere social proximity.
- Fee recipient/project GitHub or product links, when visible.
- GitHub discovery chain from first-party sources: token-page/Dexscreener links, Bankr links, official X bio, project site, docs site nav/footer, package/docs links, then exact org/repo search.

Classify with exactly one alignment label:

- `Self-launched`: the official project/person directly launched/deployed the token.
- `Aligned`: the launcher/deployer and fee recipient appear controlled by the same official project/person, but direct self-launch evidence is unclear.
- `Community-launched + endorsed`: a community or third-party account launched the token, and the fee recipient/project later clearly acknowledged the exact token by claiming fees, posting the CA, linking the token page, or acknowledging the exact CA/Bankr page/ticker-as-token from an official account.
- `Pre-endorsement speculation`: fee recipient/project has meaningful product or GitHub signal, but has not claimed fees or posted/linked the token. This can explain bids, but is not endorsement.
- `Please bro`: launcher/deployer and fee recipient differ, and someone appears to have launched a token for a project/person hoping the recipient claims fees or endorses it later.
- `Unclear`: Bankr page or social evidence is unavailable or contradictory.

Do not output slash-combined labels such as `self-launched/aligned`, and do not output `endorsed please bro`. A third-party launch is `please bro` or `pre-endorsement speculation` before acknowledgement, and `community-launched + endorsed` after clear acknowledgement.

Fee-claim weighting:

- If the official project/person is the launcher/deployer or same controlled party as the fee recipient, do not require claimed fees as endorsement. The self-launch/alignment is already provenance evidence; fee claiming is an operations/monetization signal only.
- If a community or third-party launcher deployed the token, do not call it self-launched even if the official project later acknowledges it. Use `community-launched + endorsed`.
- For community launches, official acknowledgement and fee claim are separate signals. A dev/project CA post can make the token endorsed even before fees are claimed; unclaimed fees should remain a named unknown/risk rather than blocking the endorsement label.
- A Bankr `tweetUrl` authored by the fee recipient/project is acknowledgement/endorsement evidence. It does not prove self-launch when the Bankr deployer wallet differs from the fee-recipient wallet and there is no source tying that deployer to the official project/person.
- A Bankr `tweetUrl` or social post authored by a founder/lead dev is only endorsement when the post itself contains or directly links the exact token context. Founder/lead-dev product announcements, app launches, repo launches, funding posts, or generic project updates should not be called token launch tweets.
- If Bankr exact metadata has a raw deployer wallet with no launcher username and a different fee-recipient wallet/X account, default to third-party/community launch until control is proven. With an official fee-recipient token post, classify `community-launched + endorsed`; without it, classify `please bro` or `pre-endorsement speculation`.
- Do not classify `community-launched + endorsed` solely because the fee recipient is the official project/person. The explicit endorsement check still needs a fee claim, CA post, token-page link, or clear acknowledgement of the exact token.
- Do not classify `community-launched + endorsed` when the only checked official/founder post acknowledges the project, product, repo, app, or company. The post must acknowledge the token context itself. In the report, name the exact CA, Bankr/token page, ticker-as-token, fee claim, or parent/quoted post context that made it token-specific.
- Official fee-context replies/quotes can satisfy clear acknowledgement when the parent/quoted post contains the exact CA, Bankr page, or ticker-as-token. This is often phrased indirectly, such as thanking supporters or saying the project will use the fees. Report the parent/quote context so the reader can see why it counts.
- If launcher/deployer and fee recipient differ, fee claiming is strong endorsement evidence because the recipient is actively accepting the token's fee stream.
- If launcher/deployer and fee recipient differ and fees are unclaimed, keep the launch unendorsed unless the recipient has posted the CA, linked the token page, or clearly acknowledged the token from an official account.
- Only mark `Fee-claim status: claimed` with direct claim evidence from Bankr metadata, a claim transaction/event, on-chain fee-recipient transfer from launch infrastructure, or an explicit recipient statement. Do not infer fee claiming from a launch tweet, website link, CA acknowledgement, or Agent Hour booking.

Exact-token acknowledgement can come from X, but X is not the only source. A first-party repo/docs/site page that names the exact CA or Bankr page and explains token/fee handling counts as official acknowledgement when it is controlled by the target project/person. For third-party/community launches, combine this with fee-claim evidence when present and classify as `community-launched + endorsed`, not `self-launched`.

Project/event evidence weighting:

- A recent official fee-recipient/project post about the underlying product is product/social evidence. It can raise Product/Social confidence because it confirms the project is active.
- A founder/lead-dev post about the app, repo, product, or company is also Product/Social evidence unless it explicitly names or links the token. Do not convert it into Provenance endorsement just because the author is credible or tied to the project.
- A Bankr Agent Hour booking, Bankr-hosted event, or Bankr-team public promotion is stronger than generic social proximity because it shows Bankr ecosystem attention. Report it as `Bankr ecosystem relationship/event evidence`.
- Do not automatically treat a product tweet or Agent Hour booking as token endorsement unless it explicitly mentions the token, CA, ticker, Bankr launch page, fee claim, or clearly acknowledges the Bankr-launched token.
- If the official project/person is the launcher/deployer or same controlled party as the fee recipient, the launch may be classified as `self-launched` or `aligned`; project tweets and Bankr Agent Hour evidence strengthen the read but should be described separately from formal token endorsement.
- If launcher/deployer and fee recipient differ, project tweets and Agent Hour evidence can move the posture from weak `please bro` toward `pre-endorsement signal present`, but the endorsement call remains unresolved until the recipient acknowledges the token or claims fees.

Social-proximity weighting:

- Post-launch follows, replies, likes, quotes, or visible interaction from the fee recipient/dev toward `@igoryuzo` or `@0xDeployer` can support a "watch for endorsement" thesis.
- A target/dev like or reply on a third-party "Bankr community would support you" style post is a meaningful awareness signal. Report it as `target acknowledged Bankr/community prompt`, not as endorsement.
- If the target/dev reply goes further and acknowledges token fees/support in direct context of a post with the exact CA or Bankr page, upgrade it from social proximity to soft endorsement. Keep fee-claim status separate.
- Direction matters. Fee recipient/dev -> Bankr team is stronger because it can show the claimed project/person is paying attention to the launch path. Bankr team -> fee recipient/dev is weaker unless the Bankr team clearly acknowledges the specific token.
- This is not the same as endorsement. Do not classify as `self-launched`, `aligned`, or `community-launched + endorsed` from social proximity alone.
- Timestamp matters. Engagement after launch is more meaningful than old follows, generic Bankr ecosystem chatter, or trader replies mentioning the project.
- If social proximity exists but no fee claim/CA post exists, report it as `pre-endorsement signal present` and keep the unresolved endorsement cap.

Report `please bro` clearly. It is not automatic proof of a rug, but it is a major provenance risk because the market may be pricing in endorsement that has not happened. Unless other evidence is unusually strong, cap unresolved `please bro` launches at `Watch` or cautious `Small Spec`.

When a `please bro` launch points at a strong builder/project, inspect that fee recipient's GitHub/code/product. Score that under Code/Product and explain why buyers may be speculating. Keep the endorsement call separate: no fee claim and no CA post means unendorsed, even if the repo is excellent.

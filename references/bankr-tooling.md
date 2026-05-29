# Bankr Tooling

Scoutr should use Bankr-native X/search/social tools as the default social-research path when running inside Bankr. Do not bundle API keys, paid credentials, cookies, or private tokens.

Inside Bankr, Bankr-native launch/token metadata is the primary provenance source. If the Bankr runtime, token page, or `/launches/<contract>` record identifies a contract as a Bankr launch, treat it as Bankr first and use explorer/Dexscreener/Doppler/Airlock evidence only as mechanics and configuration context. Outside Bankr, manually check `https://bankr.bot/launches/<contract>` when the user context, CA suffix, or social links suggest Bankr.

## Preferred Bankr-Native Calls

Use these tools when available in the Bankr runtime:

- `search_tool`: broad web/search pass for project name, ticker, contract address, founder handles, scam/rug terms, investigator mentions, docs, and launch announcements.
- `get_social_sentiment_for_ticker`: ticker-level social sentiment and surfaced allegations when the token has a clear symbol.
- `browse_url`: targeted reads of official project websites, docs, GitHub pages, and official X/Twitter pages when direct page extraction is useful.

If a Bankr tool is unavailable, blocked, rate-limited, or the user is not eligible for it, fall back to public web/search/explorer checks and lower confidence. Do not ask the user for API keys unless they explicitly want to connect their own account.

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

## Bankr Token Page / Please Bro Check

Many scanned tokens will be Bankr launches. When the token appears to be from Bankr, inspect the Bankr token page before the verdict.

When running as a Bankr skill, do not force Scoutr to infer Bankr provenance from bytecode or explorer labels if Bankr already exposes the launch record. The Bankr record wins for launch-source classification; the follow-up question is whether the launch is aligned/self-launched, endorsed, pre-endorsement speculation, or a `please bro`.

Bankr can launch through Airlock/Doppler/Whetstone/Rehype/Uniswap v4 infrastructure. For Bankr launches from roughly spring 2026 onward, Doppler/Airlock-style deployment plumbing should be treated as normal rather than contradictory. Explorer evidence like an Airlock owner, Doppler hook initializer, Rehype hook, or Uniswap v4 Pool Manager is compatible with Bankr launch provenance. Treat the Bankr `/launches/<contract>` or token page as the Bankr-specific metadata layer, then evaluate deployer/launcher, fee recipient, tweet, and endorsement status from that page.

Capture:

- Bankr token page URL.
- Contract address, chain, ticker, and linked socials/site.
- Deployer address/account.
- Fee recipient address/account.
- Whether deployer and fee recipient match.
- Whether the fee recipient/project has claimed fees, posted the CA, linked the token page, or otherwise clearly acknowledged the token.
- Whether the fee recipient/project recently posted about the underlying product/project, even if the post does not mention the token.
- Whether the fee recipient/project is scheduled for, appeared on, or was promoted by a Bankr show/event such as Bankr Agent Hour.
- Whether the fee recipient/dev recently followed or engaged with Bankr launch-team accounts after token launch, especially `@igoryuzo` and `@0xDeployer`, and which direction the interaction happened.
- Whether the fee recipient/dev liked, replied to, or quoted third-party replies that explicitly mention Bankr support, token support, the CA, ticker, or the Bankr community around the target/project.
- Fee recipient/project GitHub or product links, when visible.

Classify:

- `Official / aligned`: deployer and fee recipient are the same party, or the recipient/project clearly launched or endorsed it by claiming fees, posting the CA, linking the token page, or acknowledging it from an official account.
- `Pre-endorsement speculation`: fee recipient/project has meaningful product or GitHub signal, but has not claimed fees or posted/linked the token. This can explain bids, but is not endorsement.
- `Please bro`: deployer and fee recipient differ, and someone appears to have launched a token for a project/person hoping the recipient claims fees or endorses it later.
- `Unclear`: Bankr page or social evidence is unavailable or contradictory.

Fee-claim weighting:

- If deployer and fee recipient match, do not require claimed fees as endorsement. The self-launch is already alignment; fee claiming is an operations/monetization signal only.
- If deployer and fee recipient differ, fee claiming is strong endorsement evidence because the recipient is actively accepting the token's fee stream.
- If deployer and fee recipient differ and fees are unclaimed, keep the launch unendorsed unless the recipient has posted the CA, linked the token page, or clearly acknowledged the token from an official account.

Project/event evidence weighting:

- A recent official fee-recipient/project post about the underlying product is product/social evidence. It can raise Product/Social confidence because it confirms the project is active.
- A Bankr Agent Hour booking, Bankr-hosted event, or Bankr-team public promotion is stronger than generic social proximity because it shows Bankr ecosystem attention. Report it as `Bankr ecosystem relationship/event evidence`.
- Do not automatically treat a product tweet or Agent Hour booking as token endorsement unless it explicitly mentions the token, CA, ticker, Bankr launch page, fee claim, or clearly acknowledges the Bankr-launched token.
- If deployer and fee recipient match, the launch may be classified as `self-launched/aligned`; project tweets and Bankr Agent Hour evidence strengthen the read but should be described separately from formal token endorsement.
- If deployer and fee recipient differ, project tweets and Agent Hour evidence can move the posture from weak `please bro` toward `pre-endorsement signal present`, but the endorsement call remains unresolved until the recipient acknowledges the token or claims fees.

Social-proximity weighting:

- Post-launch follows, replies, likes, quotes, or visible interaction from the fee recipient/dev toward `@igoryuzo` or `@0xDeployer` can support a "watch for endorsement" thesis.
- A target/dev like or reply on a third-party "Bankr community would support you" style post is a meaningful awareness signal. Report it as `target acknowledged Bankr/community prompt`, not as endorsement.
- Direction matters. Fee recipient/dev -> Bankr team is stronger because it can show the claimed project/person is paying attention to the launch path. Bankr team -> fee recipient/dev is weaker unless the Bankr team clearly acknowledges the specific token.
- This is not the same as endorsement. Do not classify as `Official / aligned` from social proximity alone.
- Timestamp matters. Engagement after launch is more meaningful than old follows, generic Bankr ecosystem chatter, or trader replies mentioning the project.
- If social proximity exists but no fee claim/CA post exists, report it as `pre-endorsement signal present` and keep the unresolved endorsement cap.

Report `please bro` clearly. It is not automatic proof of a rug, but it is a major provenance risk because the market may be pricing in endorsement that has not happened. Unless other evidence is unusually strong, cap unresolved `please bro` launches at `Watch` or cautious `Small Spec`.

When a `please bro` launch points at a strong builder/project, inspect that fee recipient's GitHub/code/product. Score that under Code/Product and explain why buyers may be speculating. Keep the endorsement call separate: no fee claim and no CA post means unendorsed, even if the repo is excellent.

# Actual build log

## 01 · Inspect and plan
Read the existing course brief, target specification, fixture behavior, native audit and deployment rehearsal notes. Confirmed the earlier Node fixture explicitly was not a Vercel app. Existing Vercel and Supabase CLIs are authenticated; existing databases belong to other projects and will not be reused. Created this dedicated walkthrough folder, wrote the release scope and design direction before UI code.

Decision: implement the hosted target as a separate Next.js application, preserving the original course reference. Retain the Northstar/Cedar/Atlas teaching cases and the review-before-save contract. First deliver a coherent localhost preview for user feedback.

## 02 · First local implementation
Created a Next.js 16.3.4 / React 19.2.8 app with self-hosted fonts, native CSS, typed domain logic and a local SQLite repository. Implemented the directory, client evidence, transcript view, proposal/review/save, task completion, client creation, search and brief export. Opened a meaningful working preview in the internal browser on port 4310.

## 03 · Feedback and functional polish
The user asked what else could make the app better. Added a pre-call brief preview with known facts, saved actions and open questions. Improved text sizes, reduced unused space and added keyboard tab navigation. Added explicit meeting and calendar imports, validated provider adapters, a session-aware CLI and read-only MCP server.

## 04 · Hosted persistence and verification
Provisioned a dedicated Canada Central Supabase course project. Implemented anonymous authenticated workspaces, RLS and versioned updates. Preserved existing local practice data during the cloud transition. Browser save/read-back passed. HTTP tests exposed an origin comparison bug caused by Next’s internal URL host; corrected the comparison to the incoming Host and retained the cross-origin rejection test. HTTP checks then passed for retries, conflicting operation IDs, simultaneous writes and separate sessions. Direct database RLS checks also passed. CLI initially failed due to top-level await under CommonJS; set the package to ESM and reran the actual brief command successfully.

The original source proposal listed separate relational tables. The implemented workspace-document choice is explicitly recorded in DECISIONS.md, with its limits. This is not silently represented as the original table architecture.

## 05 · Real Vercel deployment
Created clientdesk-course in the existing Vercel team and configured only the dedicated Supabase URL and anonymous key. Vercel assigned the first deployment to production automatically. The app built successfully under Node 24 and became available at https://clientdesk-course.vercel.app. All nine hosted HTTP checks passed. In the internal browser, saved an exact reviewed task, reloaded and saw it persist; completed and reopened the task; opened the brief and searched by contact.

## 06 · Course packaging and final review
Preserved the local fonts, licenses, source marks, CSS tokens, architecture schematic, planning files, reusable skill, instructor prompts and a click-by-click rehearsal. Added an evergreen fictional import generator and validated both imports and duplicate replay. Formatted the implementation for readable teaching examples. Browser navigation exposed an empty-state wording leak from the Completed filter into a client page; fixed the explicit rendering context and repeated the failing navigation successfully. The final deployment receipt links the uploaded build to its local source commit.

Final source commit fc10c1d deployed successfully as dpl_FdGrZqC8V6TLNt4Uen2YFaCTnXjA. Repeated all nine hosted HTTP checks and verified the phone keyboard review path. The internal browser is left on the hosted workspace; the localhost server remains on port 4310 for continued review. Subsequent receipt/evidence commits do not change the deployed application source.

## 07 · Local headless Claude chat

Mark requested a chat using `claude -p` and the existing subscription. Verified installed CLI 2.1.263 and Claude Max authentication; checked current official usage documentation. Built a client-scoped local dialog, bounded read-only context, per-client in-page conversations, copy, cancel and errors. The backend requires local opt-in and exact loopback origin, disables public Vercel execution and strips API/provider authentication overrides. It runs without model tools or MCP connections. The first real call returned a JSON event array rather than a single result; corrected the parser, added regression coverage and received the actual client-aware response. No paid API fallback or shared subscription endpoint was created. Paid extra-usage account settings were not changed.

Chat verification completed: real two-turn Northstar conversation with original source citation, Cedar conversation separation, cancellation with question retention, and phone-width composer bounds. Fixed a fast send/stop control reuse race by giving them separate element identities and guarding the in-flight request synchronously. Twenty-one tests and TypeScript pass. No task was saved by chat.

Chat source 9b47464 built and deployed successfully as dpl_9aLCp21gG78aGeKvaX4AejXCSMr7. Hosted GET reports chat unavailable and POST rejects with 403; homepage remains available. Local Ask Claude remains open with the verified two-turn conversation.

## 08 · Deep navy visual direction

Mark requested a sleek dark-blue identity with a restrained financial-product feel. Replaced the app’s warm red/sage palette with deep navy headers, rich blue actions, cool-white surfaces and blue-gray borders. Updated client monograms, calendar accents, focus states, favicon and Claude chat as one system. Semantic error red and provider-owned logo colors remain meaningful. Updated design tokens and the replay prompt; O’Reilly deck branding is unchanged. Inspected the actual workspace and chat on desktop, then the workspace at 390px with no horizontal overflow. Sampled text contrast is recorded in navy-contrast.json; adjusted secondary text after its first ratio fell short of 4.5. This is a visual change; the underlying app and chat behaviors are unchanged.

Navy source a3e7f76 deployed successfully as dpl_3XuBMx1zakAAjcqhmbYKhMj5Xm2b. Checked the actual hosted header, canvas and primary-action colors; all match the source tokens. Returned the internal browser to localhost for the personal Claude chat.

## Hosted Claude print mode: infrastructure checkpoint

Implemented a dedicated Railway service that runs Claude Code 2.1.263 with `-p`, safe mode, no tools, no MCP servers and no session persistence. Vercel forwards fresh selected-client evidence. Hosted chat is labeled Claude and protected by a course code, private service credential, origin checks and persistent usage limits. The original local Claude option remains available. No API fallback. Added system HTTPS certificates to the container so the CLI can authenticate.

Validation: 24 app tests and 6 worker tests pass, both type checks and production build pass. The actual Claude CLI request to a local fake provider contains no tools and produces the expected final JSON answer. Dedicated Claude browser authorization is open for the Railway service; a real subscription answer and Vercel enablement remain pending. Reuse the completed desktop/390×844 layout check for unchanged geometry; provider labels now say Claude. Guide: 05-deployment/HOSTED-CLAUDE-CHAT.md.

## Hosted Claude verified on the live app

Connected the intended subscription through the official Google/Claude browser authorization, with the dedicated login stored only on Railway’s persistent volume. Verified a real Claude print-mode answer before enabling Vercel. Redeployed Railway and verified the login survived. Configured private server-side Vercel variables and deployed REFERENCE_DEPLOYMENT_ID_REMOVED.

Computer-use verification at the live app: Northstar’s answer cited its meeting and distinguished the saved task deadline from the transcript agreement. Atlas correctly reported no meetings, with separate conversation history. At 390 × 844, the panel fits the viewport with no horizontal overflow and the send control visible. No API-key fallback. Sanitized receipt: 04-verification/hosted-claude-live.json. The course access code is in private instructor configuration, excluded from this kit.


## 7 September 2026 — mixed-background and end-to-end course pass

Expanded the deck from 133 to 157 slides and added 00-course-map/END-TO-END.md. All 133 source slides and all 157 revised slides were inspected individually in native PowerPoint. Final minor text/spacing corrections and the fresh hosted screenshot were checked in rendered exports. Added the app/service cross-section, foundational vocabulary, exact build/setup prompts, Supabase migration and access checks, CLI/MCP setup, Vercel variables, Railway bootstrap/login/volume/wiring, and full hosted-answer acceptance checks. Replaced obsolete local-only hosted-chat teaching with the implemented Railway path. Source app behavior was not changed. The expanded 234-minute estimate requires a fresh delivery rehearsal.

## Public course companion — 7 September 2026

Prepared this repository as a clean learner snapshot of the completed ClientDesk reference. It includes the full plan/spec/design, app and worker, migrations, prompts, rules and skill, current slides, and pre-course setup guide. Historical local commit IDs in earlier entries describe the original development repository, not commits in this snapshot. Private hosting identifiers are replaced with placeholders in deployment examples and receipts. Learners must use their own projects and repeat verification.

## Hosted login recovery — 7 September 2026

The live UI returned a generic provider-unavailable error after a valid course code was entered. Railway was healthy, but its saved Claude credentials were empty/expired and auth status was signed out. Reconnected the dedicated account through the existing authorized browser session. Identified that the worker could persist invalid subprocess credential state unconditionally; added validated renewal persistence, protection for newer logins and an actionable reconnect error. Removed the auth-status preflight so an expired access token with refresh credentials can reach the CLI renewal flow. Regression checks: 25 app tests, 9 worker tests, both typechecks and production build passed. Live post-deploy verification is recorded separately.

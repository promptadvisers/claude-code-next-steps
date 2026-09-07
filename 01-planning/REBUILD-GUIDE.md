# Recreate ClientDesk in plain English

This guide describes the app that actually exists, including the navy design and local Claude chat. Use it with SPEC.md and the files it names. The supplied source code is the exact implementation reference. A new generation from prose can reproduce the behavior without producing identical code or pixels.

## The app we are recreating

ClientDesk helps a solo consultant prepare for a client conversation and follow through afterward. The consultant can find a client, read the supporting meeting, see the next call, prepare a follow-up, review its owner and date, save it once, and find it after refreshing the page.

Use three fictional teaching clients. Northstar has a meeting about an onboarding checklist. Cedar has unavailable meeting evidence. Atlas demonstrates an empty state. Keep all example people and records fictional. Missing information must remain visibly missing.

The app includes a client directory with search and client creation, a client detail page, meetings, upcoming calls, follow-ups, source imports, a preparation brief and Markdown export. Add the local Ask Claude conversation described below. Keep the app focused on client work rather than invented dashboard statistics.

## The files Claude should read

| File or folder | What it tells Claude |
| --- | --- |
| 01-planning/BRIEF.md | Who the app serves and the job it must accomplish |
| 01-planning/SPEC.md | Current required behavior, including chat |
| 01-planning/DECISIONS.md | The storage and identity choices already made |
| 01-planning/MILESTONES.md | A manageable build sequence |
| 01-planning/sample-data/ | Fictional source records for repeatable examples |
| 02-design/ | Palette, fonts, design rules, tokens and retained assets |
| 03-build/clientdesk/ | Complete working source, pinned dependencies, migrations and tests |
| 04-verification/ | Recorded results and screenshots to compare with a new build |
| 05-deployment/SETUP.md | The Vercel and Supabase setup requirements |
| 05-deployment/LOCAL-CLAUDE-CHAT.md | Exact local chat mechanics and CLI settings |
| 00-course-map/headless-example/ | Small runnable examples of print mode |
| .claude/ and .mcp.json | The shared skill, interface rule and MCP registration |

All paths are relative to Walkthrough Assets. Private credentials and existing user sessions are intentionally absent from the course kit. A new deployment needs its own configured accounts and environment variables.

## Start with this prompt

> Read 01-planning/BRIEF.md, 01-planning/SPEC.md, 01-planning/DECISIONS.md and 01-planning/REBUILD-GUIDE.md, then inspect 02-design and the completed app in 03-build/clientdesk. Help me recreate this ClientDesk application in a separate exercise folder, including the local Claude chat. Explain the plan in plain English. List the visible checks that will prove each stage works. Ask about decisions that are genuinely missing, and wait for me to approve the plan before building. Keep the original reference intact.

This provides the user, behavior, appearance and an actual implementation to compare against. It also makes the optional local chat part of the requested build from the beginning.

## Build the central client journey

> Build the client directory and Northstar client page first. Show the meeting and its source beside a proposed follow-up. Let me edit the task, owner and due date, then review the exact proposal before saving. Keep the supporting meeting attached. Save it once even if I retry, and show the saved task after I refresh. Preserve my draft if a save fails. Demonstrate this in the browser before adding the other screens.

A successful result shows the agreed record after reload. Clicking Save twice must not create two copies. Changing the proposal while reusing an old save operation must produce a clear conflict rather than silently changing the original task.

## Finish the working CRM

> Add client search and creation, meeting details, upcoming calls, open and completed follow-ups, and the preparation brief with Markdown export. Include Cedar’s unavailable transcript and Atlas’s empty state. Let me import the supplied meeting and calendar examples for an explicitly chosen client. Preserve the original source IDs. Import the same meeting twice and show that only one record exists. Keep scheduled calls separate from task deadlines.

Show the source of a claim. A calendar booking does not establish an agreed task deadline. Distinguish facts, unknowns and suggested next steps in the brief.

## Match the design

> Follow 02-design/DESIGN.md and the retained assets. Use deep navy headers, restrained blue actions and cool-white working surfaces. Use the supplied Manrope and DM Sans fonts. Keep text easy to read, actions easy to find, and meeting evidence near the work it supports. Use the real provider marks. Inspect desktop and phone-width layouts in the browser, including keyboard access, loading, empty, missing-transcript and save-error states. Fix observed defects and show the result again.

The app palette is navy and blue. O’Reilly red belongs to the course slides. Compare against the current navy screenshots in 04-verification/screenshots, not older red app screenshots.

## Store work and keep visitors separate

> Preserve the existing practice-workspace design. Give each browser an isolated anonymous identity and its own fictional records. Store each workspace as one versioned document in Supabase. Check ownership and validate the proposed changes on the server. Preserve both valid changes when two saves happen together. For local use without cloud settings, use the existing isolated SQLite fallback. Refuse that fallback on Vercel. Test that a second identity cannot read or change the first identity’s records.

The browser, the local app and the hosted app do not automatically share a workspace. The CLI and MCP share their own practice session by default. Using the same database project does not override these identity boundaries. Named login, account recovery and shared team workspaces are future work.

## Add Ask Claude through print mode

> Add an Ask Claude conversation to the local ClientDesk app. Let me choose a client and ask about that client’s work. On every question, read the current signed-in workspace on the server and supply only the selected client’s records to the installed Claude Code program using claude -p. Return the answer to the chat. Guide me through enabling the local feature and signing in to Claude Code. Do not use an API-key fallback.

The `-p` option means print mode: a program sends a request, Claude returns an answer, and the process finishes. The app supplies conversation history again for each question so follow-up questions still make sense. The complete invocation and its behavior are preserved in lib/claude-local.ts and 05-deployment/LOCAL-CLAUDE-CHAT.md.

> Give Claude the selected client’s profile, the four most recent meetings, up to ten calendar records and twenty tasks. Include meeting source IDs and the last six messages from that client’s current conversation. Limit each meeting summary and transcript to 3,000 characters. State when evidence is unavailable or excerpted. Ask Claude to cite meeting sources and separate facts, unknowns and suggestions.

This is a deliberately limited context packet. Chat does not browse every database record, search uploaded documents, read design files, or fetch new meetings from Fireflies by itself. Add those capabilities explicitly if the product later needs them. The current app has no general uploaded-asset library for chat to search.

> Keep chat read-only. Disable model tools, MCP connections and skills for this subprocess. It can explain or draft a follow-up, but it cannot save a task, send a message or change files. A proposed task must still pass through the existing review and save flow. Run from an empty temporary directory and pass the question as input rather than inserting it into a shell command.

> Allow this bridge only when the feature is explicitly enabled on localhost port 4310 and Claude Code is signed in with a subscription. Disable it on Vercel. Require requests to come from that local app. Show a helpful error if Claude is unavailable, busy or unable to answer. Allow stopping a reply, end a stuck process, and retain the question for retry. Keep separate conversations for each client in page memory; refreshing starts fresh.

The reference uses Sonnet with low effort, validates the returned JSON, allows one running reply per app process and stops a subprocess after 90 seconds. This timeout is application behavior, not an instruction to display course timing cues. The exact limits and flags remain in the implementation reference. The bridge uses the signed-in plan; it must not promise unlimited or token-free chat.

## Connect GitHub and deploy the CRM

> Help me connect this project to GitHub. Check what’s already installed, set up anything missing, guide me through signing in, and verify the connection. Explain any steps I need to complete myself.

> Review the files and help me create or connect the intended private repository. Keep credentials, local records and generated files out of it. Prepare a dedicated Supabase project and the supplied migrations. Help me configure Vercel, deploy the reviewed app, and verify the client journey at the actual URL. Record the deployed code version and checks.

The Vercel app never runs the personal local Claude bridge. A separate Claude Code print mode backend has now been implemented on Railway; its verified account connection and live deployment are recorded in 05-deployment/HOSTED-CLAUDE-CHAT.md. Use that guide to recreate the hosted extension. Do not treat the local Claude flag as a hosted-chat switch.

## Prove the rebuild works

> Run the reference tests and explain their results in ordinary language. Check reviewed saves, invalid requests, identical retries, conflicting retries, simultaneous changes and workspace isolation. In the browser, check the three example clients, imports, brief export and keyboard access at phone width. Ask local Claude what Maya requested, verify its source citation, switch clients and confirm the context changes. Confirm that chat errors preserve the question, stopping a reply works, and Vercel refuses the local chat route. Record what passed and what still needs a real account or live provider check.

A copied receipt is evidence of the reference build, not proof that the new build passed. Run the relevant checks again in the new environment. Follow-up drafts are not saved tasks. No live Fireflies or Calendly connection is verified until an actual authorized source read succeeds.

## Optional extension: use chat from the hosted app

> Follow 05-deployment/HOSTED-CLAUDE-CHAT.md to recreate the Railway chat service with the Claude Code print mode. Keep the existing local Claude example. Reuse the same selected-client evidence, show the correct provider name, restrict demo access and usage, and connect the intended Claude account explicitly. Verify a real answer before enabling the new Vercel release.

This extension has its own source in 03-build/clientdesk-chat, Dockerfile, pinned dependencies, CLI launch settings, tests and login helper. The deployment guide records verified subscription sign-in and live browser answers. Learners must connect their own intended account and repeat the actual-answer checks. Use 00-course-map/END-TO-END.md for the ordered setup path.

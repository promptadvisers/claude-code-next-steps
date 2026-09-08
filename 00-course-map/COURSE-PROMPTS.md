# Exact course prompts

Use a separate working copy for the live build. Start in Plan mode when exploring; approve the plan before asking Claude to edit files. Keep the reference app available as a fallback. These requests describe demonstrations; they do not authorize publishing anything during deck preparation.

## Slide 6 — The reference and your rebuild

**On screen:** Open the reference first. Then prepare and select the separate rebuild folder using 00-course-map/REBUILD-START.md.

Read the course start guide. Keep the finished reference separate. Prepare a fresh rebuild with the supplied planning, design and fictional data, using the rebuild guide. Confirm its folder and Git root. Do not copy the finished app or build yet.

**Why it works:** Orientation: find the project before changing it. Boundary: reading first prevents accidental setup work.

**Check:** The rebuild has its own Git root and no finished app source.

## Slide 10 — From meeting evidence to a reviewed task

**On screen:** Show the reference app, then return to the project conversation.

Describe the smallest version of this client workflow: open Northstar, read the latest meeting, review a suggested follow-up, and save it once. List the screens and information it needs. Do not add extra features.

**Why it works:** Target: a visible user journey. Scope: one loop rather than a whole CRM suite.

**Check:** The proposed flow contains the four steps shown in the reference.

## Slide 14 — The first planning prompt

**On screen:** Start a planning conversation in the project. Paste the prompt exactly.

Help me turn this recurring job into a short build brief: after a client call, I lose track of the agreed next action. Ask who uses the tool, what information they need, and what outcome would make it useful. Ask one question at a time.

**Why it works:** Problem: starts with work, not software features. Conversation: one question makes the decision manageable.

**Check:** We have a named user, a recurring job, and a result we can observe.

## Slide 17 — The answer that becomes the brief

**On screen:** Answer Claude’s questions, then paste this decision summary.

Alex needs ClientDesk: read Northstar’s sourced meeting, review a task, choose its owner/date, save once and find it after reload. Keep facts beside proposals. Use the supplied full-course scope. Exclude billing, campaigns and sending. Draft 01-planning/BRIEF.md for review.

**Why it works:** Specificity: names the user and result. Exclusions: prevent plausible but unnecessary features.

**Check:** The brief ends with a saved, reloadable task and retains the supplied full-course scope.

## Slide 24 — One request through ClientDesk

**On screen:** Point from the request through client_evidence to /api/workspace, then to the source record. Later, replay the request during the MCP demonstration.

Find Northstar’s latest meeting. Cite the source ID and tell me what is still undecided.

**Check:** The answer names demo-transcript-001 and separates the requested checklist from its undecided owner and delivery timing.

## Slide 27 — The reference checkpoint before class

**On screen:** Complete this reference setup before class. Stop it before starting the rebuild on the same port.

In the finished reference folder, read 00-course-map/START-HERE.md. Check Node 24, install locked dependencies, prepare the demo data and run the documented checks. Start the reference on port 4310. Report blockers. Do not run this setup in an empty rebuild.

**Why it works:** Readiness: use the project’s actual instructions. Clarity: surface one concrete blocker before the lab.

**Check:** The reference opens locally. The rebuild remains a separate project.

## Slide 31 — Write the project instructions

**On screen:** Show CLAUDE.md in the project file list. Paste the request into Claude Code.

Read the brief and supplied reference specification. Create a short README and CLAUDE.md with the project purpose, planned file locations, Node 24, start command, checks and review boundaries. Label commands as planned until implemented. Update them after the first passing build.

**Why it works:** Context: uses the files that actually exist. Maintenance: keeps instructions short enough to review.

**Check:** Instructions distinguish planned commands from commands that actually pass.

## Slide 33 — Turn a design preference into a rule

**On screen:** Open .claude/rules. Compare Claude’s result with the example on the previous slide.

Create a rule in .claude/rules/interface.md for the interface files. Require visible sources beside meeting facts, distinct loading and error states, one clear primary action, and a phone-width review after changes. Show me the file and explain its scope.

**Why it works:** Observable: describes things we can see. Scoped: applies the guidance where interface changes happen.

**Check:** The rule names the real interface path and four observable requirements.

## Slide 35 — Review design guidance before using it

**On screen:** Open .claude/rules/interface.md. Use the local rule as the concrete review example; no external repository is required.

Read the supplied .claude/rules/interface.md without changing files. Explain its scope and observable checks. If reviewing an external design skill later, record its exact source revision and inspect scripts before using its guidance.

**Check:** Classroom example: the supplied interface rule. External skills are an optional extension.

## Slide 36 — Enter Plan mode before changing files

**On screen:** In the interactive Claude Code session, choose Plan mode with the permission-mode control; Shift+Tab cycles modes in the terminal. Confirm the status.

Help me switch this Claude Code session to Plan mode. Confirm it is active. Read the brief and design files, ask about missing decisions, and propose the build sequence before editing the app.

**Why it works:** Mode: separates planning from implementation. Evidence: reads the project before proposing work.

**Check:** The session shows Plan mode and returns decisions and a plan.

## Slide 37 — The planning conversation

**On screen:** Enter plan mode, supply the brief, and show the difference between a question that blocks the build and a reversible design choice.

We are building ClientDesk for a solo consultant. Read 01-planning/BRIEF.md and the sample records. Identify decisions that would block a useful first version. Ask me those questions before proposing the plan. Then outline the scope, screens, data, acceptance checks, and milestones. Do not build yet.

**Check:** Where: Claude Code Plan mode. Review the proposed plan before asking Claude to save 01-planning/SPEC.md.

## Slide 38 — Answer the decisions that block the plan

**On screen:** Read Claude’s questions aloud and give this decision summary.

For the first milestone, use fictional records and one local user. The task must show its supporting meeting, owner, and proposed due date before saving. Importing the same meeting twice must keep one copy. Defer hosting until this loop passes. Keep named sign-in outside this release. Update the proposed plan.

**Why it works:** Decisions: resolves the risky unknowns. Sequence: postpones setup that does not prove the first loop.

**Check:** The plan separates the local first milestone from later live setup.

## Slide 39 — Why the planning prompt works

**On screen:** Keep the plan and 01-planning/BRIEF.md visible together. Paste this review request.

Review the proposed plan against 01-planning/BRIEF.md. Identify any unstated assumption, extra feature, or requirement that cannot be checked. For each issue, propose the smallest clarification. Do not start implementation.

**Why it works:** Grounding: checks against the agreed brief. Testability: turns vague requirements into observable outcomes.

**Check:** Every first-milestone requirement has a clear observation or test.

## Slide 41 — Approve and save the specification

**On screen:** After reviewing the plan, allow file editing and send this prompt. Open both resulting files.

I approve the reviewed plan. Save it to 01-planning/SPEC.md with the first-release scope, source fields, screens, failure behavior, acceptance checks, and milestones. Put the milestone checklist in 01-planning/MILESTONES.md. Do not build yet.

**Why it works:** Artifact: turns a chat answer into project files. Stop point: lets us read the contract before code changes.

**Check:** 01-planning/SPEC.md and 01-planning/MILESTONES.md agree on the first milestone.

## Slide 44 — The checkpoint before implementation

**On screen:** Keep 01-planning/SPEC.md open beside Claude’s response.

Read the first milestone and explain it back to me as a user journey. Name the files you expect to change, the checks you will run, and where you will stop. Flag anything that is still ambiguous. Do not edit yet.

**Why it works:** Preview: reveals misunderstandings cheaply. Boundary: defines a finish line for the next request.

**Check:** The explanation matches the agreed journey and stopping point.

## Slide 51 — The project’s .gitignore file

**On screen:** Open the provided .gitignore. Show the empty example environment file.

Set up the project’s ignore file so secrets, machine-specific settings, logs, and generated local data stay out of Git. Keep an empty example of the required environment variables. Show me what will be excluded.

**Check:** Keep credentials, generated output and local records outside the reviewed Git checkpoint.

## Slide 52 — The first local checkpoint

**On screen:** Verify the exact Git root. A folder inside another repository needs its own root for this isolated exercise.

Confirm that Git’s root is this rebuild folder, not an enclosing project. Initialize a separate repository if needed. Exclude secrets and local data. Show the plan and design files to include, then save their reviewed local checkpoint.

**Check:** Result: a named checkpoint we can return to. Claude chooses the required Git commands.

## Slide 53 — What a checkpoint gives us

**On screen:** Show Claude’s summary and the file comparison in the editor.

Show the latest local checkpoint and summarize its included files. Explain how I could compare the current work with that checkpoint without discarding any changes.

**Why it works:** Meaning: connects Git to a recoverable work habit. Safety: asks for comparison rather than a reset.

**Check:** The checkpoint contains the plan and no secret or generated data.

## Slide 55 — A GitHub connection, in plain English

**On screen:** In Claude Code at the project root, send this prompt. Complete any browser sign-in, then inspect the returned account and connection result.

Help me connect this project to GitHub. Check what’s already installed, set up anything missing, guide me through signing in, and verify the connection. Explain any steps I need to complete myself.

**Why it works:** Inspect first: reuse the existing setup. Guide me: pause for my sign-in. Verify: show the connected account.

**Check:** Claude identifies the signed-in account and reports that GitHub access works. Repository creation comes next.

## Slide 56 — A private GitHub repository

**On screen:** Show the confirmation in GitHub. If origin already exists, inspect it instead of recreating it. Do not publish the course kit to a personal account by accident.

Create a private GitHub repository for this project using the account I have signed in to. First show me the account, repository name, and files to upload. Check for an existing remote. After I confirm those details, upload the reviewed checkpoint.

**Check:** Result: a private repository containing the reviewed files. A remote is the project’s linked online repository.

## Slide 57 — Verify the repository before moving on

**On screen:** Open the repository Claude created in the browser.

Show the repository URL, visibility, account owner, and latest uploaded checkpoint. Compare the uploaded files with the reviewed list. If anything is missing or unexpected, explain it before changing the repository.

**Why it works:** Verification: checks the actual destination. Visibility: makes the private/public choice explicit.

**Check:** The browser shows the intended private repository and reviewed files.

## Slide 58 — Give the build a visual direction

**On screen:** Open the design folder and the actual reference screen, then send the prompt.

Read 02-design/DESIGN.md and its assets. Use deep navy, quiet surfaces, Manrope headings and DM Sans body text. Make meeting evidence and the next action easy to find. Show the desktop and phone layout plan before implementation.

**Why it works:** Specificity: names hierarchy, fonts and color. Continuity: reuses saved design decisions.

**Check:** The layout has a clear reading order and a phone plan.

## Slide 59 — Create the app’s starting structure

**On screen:** Use the rebuild folder. Open package.json and compare the scripts with the reference.

In this rebuild, create 03-build/clientdesk using Next.js, TypeScript and Node 24. Add the documented dependencies and scripts. Create the page, server routes and sample storage structure from SPEC.md. Start it on port 4310 and show a working page.

**Why it works:** Foundation: makes the project runnable. Check: proves setup before adding features.

**Check:** The page opens locally and the build and type checks pass.

## Slide 60 — The first implementation request

**On screen:** Use the separate rebuild on port 4310. Stop the local reference first, or keep the hosted reference available.

Read 01-planning/SPEC.md and 01-planning/MILESTONES.md. Build the first client workflow in 03-build/clientdesk with fictional records: meeting evidence, an editable follow-up, review, and save. Run the agreed checks and show the result in the browser. Stop before adding live services.

**Check:** While Claude works, inspect the acceptance checks and prepared reference.

## Slide 61 — Read the build result like a reviewer

**On screen:** Wait for the build to finish. Open the local URL Claude reports.

Compare the changed files and check results with the first milestone. Open the actual app and explain what passes, what is incomplete, and where you stopped.

**Why it works:** Evidence: prevents a success summary from becoming the test. Honesty: distinguishes passed from untested.

**Check:** The screen and checks support the claim; unfinished work stays named.

## Slide 62 — Complete the CRM around the first loop

**On screen:** Compare the SPEC.md feature list with the running rebuild, marking complete, missing or failed.

Now add the remaining SPEC.md screens: client list and details, meetings, upcoming calls, follow-ups, Connections and brief export. Include client creation, task review, completion and reload behavior. Work in milestones and show the test result for each.

**Why it works:** Coverage: names the remaining screens. Milestones: exposes unfinished behavior early.

**Check:** Every required screen works; saved changes survive reload.

## Slide 65 — Inspect the source connection

**On screen:** Show the sample record and its adapter in the project.

Open Connections and inspect the supplied sample meeting. Explain how its source ID, client and summary reach the app. Use the fictional record for this demonstration.

**Why it works:** Isolation: changes one source while preserving the working journey. Contract: keeps the screen independent of provider details.

**Check:** The app says Sample source; no live connection is implied.

## Slide 68 — Import the meeting and prove it

**On screen:** Connections → Import record → Northstar → inspect JSON → Import meeting. Repeat the same import.

Use the fictional Northstar meeting in 01-planning/sample-data/meeting.json. Import it into this browser’s practice workspace. Compare the source ID with the client page. Import it again and confirm the meeting count stays the same.

**Why it works:** Scope: one transcript makes failures easier to diagnose. Traceability: preserves the source and duplicate check.

**Check:** The source ID is unchanged and the second import does not increase the count.

## Slide 70 — The upcoming-call check

**On screen:** Connections → Import event → Northstar → paste the sample event → Import event. Compare the updated next-call card.

Import the fictional event in 01-planning/sample-data/event.json for Northstar. Compare its source ID, timezone and status with the upcoming-call card. Explain why a scheduled call does not create an agreed task deadline.

**Why it works:** Identity: avoids matching people by a similar name. Time: preserves the event’s actual timezone.

**Check:** The event remains separate from the meeting and from a proposed task date.

## Slide 73 — Create your Supabase project

**On screen:** The reference already includes database code and two migrations. A fresh rebuild must implement and review its own database checkpoint before applying SQL.

Before cloud setup, inspect this rebuild. Implement the spec’s Supabase storage, anonymous identity, migrations and access-check script if missing. Show and review those files. Then configure a dedicated teaching project, apply its migrations in order and test two isolated identities.

**Why it works:** Order: applies the recorded database setup. Isolation: checks who can access records.

**Check:** Required files exist; migrations apply in order; two-identity database checks pass. Local SQLite checks alone are insufficient.

## Slide 74 — Ask for an access check in plain English

**On screen:** In 03-build/clientdesk run npm run test:http; use verify-rls.mjs only with the dedicated configured teaching database.

Read the existing access tests. Run the documented check with two isolated practice identities. Show that one can access its records and the other cannot. Explain the enforced boundary and any untested deployment condition.

**Why it works:** Enforcement: tests the actual data boundary. Contrast: one allowed and one denied case prove different things.

**Check:** Allowed and denied results are visible. Distinguish local repository tests from database-policy tests.

## Slide 77 — Give Claude a CLI and an MCP interface

**On screen:** Inspect scripts/clientdesk.ts, scripts/mcp.mjs and scripts/http-session.mjs in the reference app; implement their responsibilities in the rebuild.

Build the ClientDesk CLI and MCP interface from the spec. Reuse the workspace API and shared tool identity. Expose client_evidence and sourced brief preparation. Accept client IDs or unambiguous names. Test Northstar, an unknown client and missing meetings through the real CLI and MCP protocol.

**Why it works:** Reuse: keeps one source of app behavior. Cases: proves the interface handles uncertainty.

**Check:** CLI and MCP share their practice workspace, preserve sources and unknowns, and expose the documented tool names.

## Slide 78 — Connect the project’s MCP server

**On screen:** The reference entry is scripts/mcp.mjs. A rebuild may use another path; its .mcp.json, README and actual file must agree. Restart the session after configuration changes.

Check that the app is running. Review this implementation’s project-root .mcp.json and actual MCP entry file. Start a fresh Claude Code session from this project root, approve the trusted local server, and verify ClientDesk and client_evidence are connected in /mcp.

**Why it works:** Location: makes relative paths resolve. Verify: tests the connection before a question.

**Check:** /mcp reports the actual project server connected; client_evidence is available.

## Slide 79 — A useful MCP question

**On screen:** Run the read-only MCP tool from the kit. Confirm its result against the fixture file.

Use the ClientDesk tools to find Northstar’s latest meeting. Show the source ID and explain which follow-up the meeting supports. If the evidence is missing, say so. Do not save a task.

**Check:** Before the prompt: use /mcp to check that the ClientDesk server and tools are available.

## Slide 80 — What to inspect in the MCP answer

**On screen:** Keep Claude’s tool answer and the meeting evidence visible.

Compare your answer with Northstar’s source meeting. Separate the quoted fact, any missing information, and your proposed follow-up. Show the source ID for the fact and confirm that no task was saved.

**Why it works:** Separation: keeps facts distinct from suggestions. Boundary: proves a read request did not become a write.

**Check:** The checklist request is sourced, the date is unknown, and the task count is unchanged.

## Slide 83 — A phone-sized screen, explained

**On screen:** Open Chrome’s device toolbar, choose Responsive, and enter 390 for width. Or ask Claude’s browser tool to set that width.

Show Northstar’s page at desktop width, then at 390 pixels wide. Explain the difference in plain English. Keep the meeting and Review control visible so we can see whether the same job still works on a small screen.

**Why it works:** Comparison: changes one condition at a time. Purpose: tests the job rather than judging a tiny screenshot.

**Check:** The audience sees the same page become phone-sized.

## Slide 85 — Claude in Chrome

**On screen:** Show the extension connection and the local app URL. Ask Claude to identify the client name from the rendered page.

Help me connect this Claude Code session to Chrome. Check the current requirements and explain the setup steps I need to complete. Once connected, show the open ClientDesk page so I can confirm you have the right tab.

**Check:** Where: start in Claude Code. The technical reference shows the terminal launch command and the in-session status command.

## Slide 86 — Confirm Claude can see the right page

**On screen:** Run the browser connection check and keep Northstar visible.

Use the browser connection to describe the open ClientDesk page. Name the client, the latest meeting, and the primary action you can see. Do not click or change anything yet.

**Why it works:** Confirmation: establishes the correct tab. Observation: distinguishes seeing the page from reading its source files.

**Check:** Claude correctly identifies Northstar and Review task.

## Slide 87 — The browser review request

**On screen:** Run the request and record the actual journey. Show a passing result or the observed defect and its recheck.

Open Northstar in the running ClientDesk app. Set the browser’s content area to 390 pixels wide, roughly a phone screen. Find the latest meeting and reach Review using the keyboard. Record what happens. If a control is clipped, explain the cause, fix it and repeat the same journey. Otherwise, document the passing result.

**Check:** Evidence: the tested width, the action and its result. For a fix, compare before and after.

## Slide 88 — A defect report you can act on

**On screen:** Navigate to Northstar in the running app. The supplied reference uses /?view=client&client=northstar; a rebuild may use a different route. There is no hidden cramped-mode parameter.

At 390 pixels wide, inspect the Northstar page and reach Review with the keyboard. If an action is blocked, capture it, explain the cause, fix it and repeat the same path. If it works, record the passing evidence instead of inventing a defect.

**Why it works:** Reproduction: names the condition and blocked action. Comparison: holds the width and journey constant.

**Check:** A real defect has a before/after comparison; a passing journey has a recorded result.

## Slide 92 — Computer use setup

**On screen:** Show the setup menu without changing audience permissions. Recheck availability before the live course.

Help me enable computer use in this Claude Code session. Check whether my device and account support it. Explain the permissions I need to grant, then wait while I enable access to the document viewer.

**Check:** Requires: an eligible macOS setup and interactive Claude Code session. Check current requirements before class.

## Slide 93 — The native document review prompt

**On screen:** Export the brief first, then select its real local file in the viewer.

Open the exported Northstar brief in the approved document viewer. Check that every section is readable, sources stay beside facts, and proposed actions are clearly labeled. Capture any clipped text and identify its section. Do not send or upload the document.

**Why it works:** Surface: tests the file in the app people will use. Specificity: gives the review observable criteria.

**Check:** A screenshot and section-level findings support the review.

## Slide 94 — Export the brief, then inspect it

**On screen:** Use a fictional export in Preview or the prepared native viewer. Point out the per-app approval and how to stop screen control.

Open the exported client brief in the native viewer.
Check that the client, source, owner, and due date
are readable. Screenshot any clipping.
Do not share, email, or upload the file.

**Check:** Inspect the result against the slide.

## Slide 99 — Connect the app to Vercel

**On screen:** Use Vercel Add New Project, choose your repository and set the root directory. Obtain the URL and legacy anon key from your Supabase project settings.

Help me import my reviewed GitHub repository into Vercel. Set the root directory to 03-build/clientdesk and Node to 24. Add my SUPABASE_URL and SUPABASE_ANON_KEY in server settings for the deployment environment. Show the destination and build settings before deploying.

**Why it works:** Root: deploys the app folder, not the whole kit. Configuration: connects the prepared database.

**Check:** The deployment builds and the hosted app reports Supabase storage.

## Slide 100 — Run the checks before deployment

**On screen:** Run the documented scripts from the app folder. Confirm how this implementation isolates build output before running concurrent servers.

Run the app’s tests, typecheck, build and HTTP checks. Keep test/build output separate from the running demo, or stop it safely first. Fix failures and repeat affected checks. Restart the demo and verify the same saved task after reload before deploying.

**Why it works:** Layers: checks data, types, build and real requests. Evidence: distinguishes passing code from a passing screen.

**Check:** Checks pass and the existing browser workspace still opens with its saved task.

## Slide 101 — A hosted preview of the CRM

**On screen:** Demonstrate only in the prepared hosting project. Record the preview URL and the commit that produced it. Use localhost if setup is not ready.

Prepare a hosted preview of the reviewed CRM. Run the checks, inspect the changed files, and show me the hosting project and visibility settings. After I approve that destination, deploy the preview and record its URL and code version.

**Check:** Your own Vercel project + your Supabase database. Follow 05-deployment/SETUP.md.

## Slide 102 — Check the hosted result

**On screen:** Open the actual URL from the approved deployment.

Open the new preview URL and repeat the agreed client journey with fictional data. Confirm the intended access settings and code version. Report failed or untested checks separately. Do not treat a successful deployment message as proof that the app works.

**Why it works:** Outcome: verifies the destination, not only the command. Version: makes the result reproducible.

**Check:** The hosted journey works and its version and access settings are recorded.

## Slide 103 — Ask Claude about the client

**On screen:** Demonstrate the prepared reference chat here. For the rebuild, run this question after implementing and enabling the bridge on slide 108.

What did Maya request? Cite the meeting source ID. What did the meeting leave undecided? Keep it to three short bullets.

**Then ask:** Which source supports the checklist request? Cite the original source ID.

**Check:** The reply cites demo-transcript-001, preserves the unknowns, and leaves the task count unchanged.

## Slide 105 — The small command behind the chat

**On screen:** Open 00-course-map/headless-example/run-first.sh. Run the prepared script in the terminal.

Ask for one small result:

“Explain a CRM in one sentence.”

Run the command in your terminal. Claude prints the answer and returns control to you.

```sh
claude -p "Explain a CRM in one sentence."
```

**Check:** An answer appears and the process exits.

## Slide 106 — Give the request a source file

**On screen:** Run 00-course-map/headless-example/run-file.sh from its folder. Read the saved draft.

Use only the supplied evidence. List facts and unknowns. Cite source IDs. Do not ask what to do.

```sh
claude --safe-mode -p --tools "" \
  --model sonnet --effort low \
  --system-prompt "Use only the supplied evidence.
List facts and unknowns. Cite source IDs.
Do not ask what to do." \
  < northstar-context.txt > northstar-draft.txt
```

**Check:** The draft cites demo-transcript-001 and says the owner and due date were not agreed.

## Slide 108 — Ask Claude to build the bridge

**On screen:** Show the exact request, then the completed local bridge files and tests/chat.test.ts. Use the prepared implementation during this short demonstration.

First add a local Ask Claude panel for the selected client. Use the signed-in Claude Code CLI in print mode. Send only that client’s evidence and recent chat. Return a sourced answer with no tools or writes. Include Stop, errors and a timeout. Enable it only on localhost.

**Why it works:** Context: limits the request to one client. Behavior: names the result and the failure states. Boundary: keeps the subscription bridge local.

**Check:** One client’s evidence goes in; a sourced answer or a useful error comes back.

## Slide 115 — The program that handles chat

**On screen:** Open the worker Dockerfile, src/claude.ts, src/server.ts and src/guard.ts. Compare with 05-deployment/HOSTED-CLAUDE-CHAT.md.

Build hosted chat from the guide: worker, Dockerfile, saved-login helper, tests, app-to-worker route and access-code UI. Send only the selected client’s records and question. Check answers; disable tools and writes. Test cancellation, timeout, access checks and persistent usage limits.

**Why it works:** Clear job: answers one client question. Boundaries: controls access and actions.

**Check:** Worker, login helper, app adapter, access-code UI and tests exist. Verify both ends before a real Railway answer.

## Slide 116 — A home for the chat helper on Railway

**On screen:** In Railway create a project and service from your repository, select the worker root, attach the volume and set the variables. Record your own service URL.

Help me run 03-build/clientdesk-chat on Railway using the hosted chat guide. Keep its Claude login and usage counts in a saved folder that survives updates. Give the helper a web address. Create separate private values for the app to connect and for learners to access chat.

**Why it works:** Saved folder: keeps the login after an update. Separate access: the app and learners have different codes.

**Check:** The helper is running, its web address is recorded, and the saved folder is attached.

## Slide 117 — Claude needs a login on its new computer

**On screen:** Ask Claude to install the Railway CLI, sign in and link the worker folder to the intended service. Verify with railway status. Then run railway ssh node scripts/login.mjs and complete its browser authorization.

Review the login helper created with our worker. Help me sign in to the intended Claude account on Railway. Keep login in the saved /data folder. Test a real answer, deploy the helper again, then repeat the question to confirm login survives.

**Why it works:** Right computer: signs in where Claude runs. Repeat check: confirms an update keeps access.

**Check:** The reviewed login helper exists and a real answer works before and after redeployment.

## Slide 120 — Prove the full hosted conversation

**On screen:** Open your deployed app in a fresh browser workspace. Use fictional sample data. Enter the private course code only in the chat panel.

At my Vercel URL, ask what Maya requested and require the meeting source ID. Switch to Atlas and check the missing-meeting response. Test a wrong course code, Stop, a retry and phone width. Save a reviewed task separately and reload it. Record each result.

**Why it works:** End to end: tests the deployed services together. Contrast: checks evidence and missing evidence.

**Check:** Northstar cites demo-transcript-001; Atlas has no invented meeting; task save remains separate.

## Slide 126 — The skill creation prompt

**On screen:** Open .claude/skills and paste the prompt into the project conversation.

Turn our client-brief method into a project skill named client-brief. It should accept a client ID and brief date, read evidence, separate facts from proposals, and create a consistent brief. Include a template, an example, and meaningful failure cases. Do not save tasks or send messages.

**Why it works:** Repeatability: packages the method we already tested. Inputs: makes client and date explicit.

**Check:** The skill folder contains an entry point and the promised supporting files.

## Slide 128 — Why the name and hints matter

**On screen:** Open the top of SKILL.md and then its slash-command hint.

Review the skill metadata as if you were a new teammate. Explain how to discover it, what arguments it expects, and whether it runs only when requested. Suggest clearer wording if any field makes you guess.

**Why it works:** Discoverability: tests the words the next person will see. Control: checks when invocation is allowed.

**Check:** The name, description, argument hint, and invocation setting agree.

## Slide 130 — The skill’s working instructions

**On screen:** Read the instructions aloud as if you had never seen the course. Remove any step that relies on hidden chat history.

Validate the client and brief date. Read the client and available meeting evidence. Identify missing information. Write the brief using templates/brief.md. Cite each meeting fact. Label suggestions as proposed. Do not save a task or send a message.

**Check:** File: .claude/skills/client-brief/SKILL.md, below its metadata.

## Slide 131 — Run the skill with the demo date

**On screen:** Start a fresh Claude Code conversation from Walkthrough Assets. Type /client-brief and inspect its argument hint.

Open the prepared demo context and read its date. Type /client-brief with northstar and that date. Compare the cited meeting with the CLI evidence. Then try an unknown client and record the validation response.

**Why it works:** Reusable date: avoids a stale classroom example. Inspection: checks the output against the intended structure.

**Check:** A known client returns a sourced brief; an unknown client asks for a correction.

## Slide 137 — Add a hook with a clear purpose

**On screen:** Use the exercise copy. Run 00-course-map/test-hook.mjs before enabling the example.

Review 00-course-map/check-fixture.mjs and .claude/settings.example.json. Explain the checked files and limits. In an exercise copy, merge the hook into existing settings. Test one valid event and one invalid meeting without changing the reference data.

**Why it works:** Review: reads executable code before enabling it. Integration: preserves the project’s other settings.

**Check:** The valid event passes and the invalid meeting is reported. The checker makes no network request.

## Slide 142 — The fresh-session rehearsal

**On screen:** Start a new Claude Code conversation in a separate working copy. Ask a teammate to follow the README.

Read this release’s README in a fresh conversation. Follow its setup and run the documented Northstar brief example. Record every point where you need information that is absent from the files. Do not use the author’s earlier conversation.

**Why it works:** Independence: removes hidden chat context. Feedback: turns guessing into a specific documentation defect.

**Check:** The teammate finishes or produces a reproducible missing-information report.

## Slide 149 — Prepare the release in plain English

**On screen:** Open RELEASE.md and review the file list before approving repository changes.

Prepare a reviewed release of the app and client-brief skill. Include setup, one example, permissions, known limitations, and the cases tested. Show the changed files and proposed version. After I approve them, create the versioned release and give me the teammate setup instructions.

**Why it works:** Completeness: includes the instructions around the skill. Review: ties sharing to a known, tested version.

**Check:** The release points to one version and a setup another person can follow.

## Slide 150 — A teammate starts from a known version

**On screen:** Use the published participant repository. Record the current commit before setup. Keep this reference clone separate from the rebuild.

Clone https://github.com/promptadvisers/claude-code-next-steps or open the supplied kit. Read BEFORE-YOU-JOIN.md and 00-course-map/START-HERE.md. Complete setup, start Claude Code at the root and run /client-brief with northstar and the prepared date.

**Check:** Use the public course repository or the supplied kit. Record its commit before starting.

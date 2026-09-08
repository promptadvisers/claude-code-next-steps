# ClientDesk: A–Z reproduction prompts

[Open the slide walkthrough](https://clientdesk-build-playbook.markkashef.chatgpt.site) · [Try the reference app](https://clientdesk-course.vercel.app)

This route explicitly reuses the supplied source to reproduce the reference implementation. It is not a transcript of a completed fresh generation. Expected outputs below are acceptance targets; account setup and your deployment still require verification. The original slide prompts remain in COURSE-PROMPTS.md. Reference baseline: `d6ec748097fc3ed8594b4e918ac30a609d76b624`.

Choose the available course authoring model and low effort if desired; worker chat retains the model defined by the pinned source. Send one prompt at a time and check its result before continuing.

## 01. One destination. One reference.

01 / Start · Plan

```text
We are reproducing the supplied ClientDesk implementation for this course, including its visual design, database integration, and hosted chat. Use the public repository https://github.com/promptadvisers/claude-code-next-steps as the reference, pinned to commit d6ec748097fc3ed8594b4e918ac30a609d76b624. Do not redesign or substitute a different stack. Read its README, 00-course-map/END-TO-END.md and 01-planning/SPEC.md. Summarize the complete target, prerequisites, and account steps. Separate the local app, Supabase, Vercel, and Railway. Do not change files yet.
```

**Expected output**

- A navy ClientDesk CRM with sourced meetings, reviewed tasks, calendar, imports, and brief export.
- Supabase stores hosted workspaces; Vercel serves the app; Railway runs Claude Code chat.
- A concrete prerequisite list: Node 24, Git, Claude Code sign-in, and your hosting accounts.

**Checkpoint:** The target includes the full hosted architecture, not only a local UI.

[Reference](../00-course-map/END-TO-END.md)

## 02. Create a clean workspace.

01 / Start · Build

```text
In my chosen course folder, create a new folder named ClientDesk-Demo, refusing to overwrite any existing folder. Inside it, clone https://github.com/promptadvisers/claude-code-next-steps into Reference and check out d6ec748097fc3ed8594b4e918ac30a609d76b624. Treat Reference as read-only. Create a sibling Build folder with its own Git repository. Copy tracked course files from Reference into Build, excluding the 03-build directory initially. Do not copy .git, environment files, credentials, dependencies, or runtime data. Verify both Git roots and show the folder tree. We will reuse the exact reference code progressively, not pretend this is generation from a blank project.
```

**Expected output**

- ClientDesk-Demo/Reference contains the pinned complete reference.
- ClientDesk-Demo/Build has its own Git root and the course planning/design materials.
- Application source has not yet been copied into Build.

**Checkpoint:** Open Build as the project in Claude Code. Verify pwd and git rev-parse --show-toplevel before the next step.

[Reference](../00-course-map/REBUILD-START.md)

## 03. Check the tools first.

01 / Start · Build

```text
Working in Build, read BEFORE-YOU-JOIN.md and 00-course-map/START-HERE.md. Verify Node 24, npm, Git, and Claude Code are available. Verify the intended Claude account without printing credentials. Help me resolve missing prerequisites and identify any manual sign-in step. Keep a concise SETUP-CHECK.md of what passed and what remains. Do not deploy or enable paid overages.
```

**Expected output**

- Installed tool versions are recorded.
- The intended Claude account is signed in or its manual action is clearly identified.
- The working folder is Build, with a separate Git root.

**Checkpoint:** Every missing prerequisite is resolved or explicitly marked before dependent steps.

[Reference](../BEFORE-YOU-JOIN.md)

## 04. Describe the useful job.

02 / Plan · Plan

```text
Read 01-planning/BRIEF.md, SPEC.md, and the fictional sample records. Explain the first useful loop in plain language: Alex opens Northstar, reads a sourced meeting, reviews a proposed follow-up, chooses owner and date, saves exactly once, and reloads. Maya asks for an onboarding checklist, but the meeting does not agree an owner or deadline. Preserve that distinction. Record a brief walkthrough in 01-planning/DEMO-PLAN.md. Do not alter the reference specification or build yet.
```

**Expected output**

- A short client → meeting → review → save → reload journey.
- Meeting facts are separate from proposed task values.
- Billing, campaigns, and sending are explicitly outside scope.

**Checkpoint:** No agreed owner or deadline is invented from the Northstar meeting.

[Reference](../01-planning/SPEC.md)

## 05. Give every milestone a finish line.

02 / Plan · Plan

```text
Read the complete reference specification and MILESTONES.md. Extend DEMO-PLAN.md with a checklist for foundation, first task loop, remaining CRM screens, meeting/calendar imports, CLI/MCP, browser verification, Supabase, Vercel, local chat, Railway chat, reusable skill, and release. For each, state its prerequisite, observable acceptance check, and evidence to retain. Preserve the supplied behavior and stack. Identify ambiguous requirements now rather than making silent choices.
```

**Expected output**

- An ordered checklist covers the entire app and deployment.
- Each stage has a visible pass condition and an evidence location.
- Account-dependent work is distinguished from code that can run locally.

**Checkpoint:** Database and hosted chat have their own checks, not a single “deployed” checkbox.

[Reference](../01-planning/MILESTONES.md)

## 06. Lock the visual language.

02 / Plan · Plan

```text
Read 02-design/DESIGN.md and tokens.css and inspect the reference screenshots in 04-verification/screenshots. Document the navy workspace shell, typography, spacing, cards, tables, selection states, review drawer, and phone layout in DEMO-PLAN.md. Reuse the supplied design assets and actual reference components when implementing. Preserve readable source labels and keyboard focus. Do not introduce a new theme or redesign.
```

**Expected output**

- One agreed visual target tied to supplied screenshots.
- Desktop and phone expectations are both recorded.
- Reference assets and tokens are identified by path.

**Checkpoint:** Compare against the supplied ClientDesk screenshots, not a generic dashboard.

[Reference](../02-design/DESIGN.md)

## 07. Bring in the exact foundation.

03 / Local app · Build

```text
Copy the tracked 03-build/clientdesk application from ../Reference into this Build repository, preserving its source and package-lock.json exactly. Do not copy .env files, .data, .next, node_modules, or secrets. Some components contain later workflows; retain their dependencies rather than breaking the source apart. Inspect package scripts, run npm ci with Node 24, then npm test and npm run typecheck from 03-build/clientdesk. Record the reference commit and results. Fix only environment/setup issues; report any source change before applying it.
```

**Expected output**

- The exact app source and dependency lockfile are present.
- Dependencies install under Node 24.
- Tests and TypeScript checks pass with recorded output.

**Checkpoint:** A source comparison shows no unexplained differences from the pinned reference.

[Reference](../03-build/clientdesk/package.json)

## 08. Open the working app.

03 / Local app · Build

```text
Read 00-course-map/START-HERE.md. Prepare the supplied fictional demo inputs using node 00-course-map/prepare-demo.mjs from Build if required. Confirm no cloud environment values are configured, then start the app from 03-build/clientdesk using npm run dev. Keep the process running and give me the exact local URL. Check its HTTP response. Explain where local practice data is stored and how browser identity isolates workspaces. Do not reset an existing workspace silently.
```

**Expected output**

- The app responds at http://127.0.0.1:4310.
- The navy workspace loads with the supplied fictional clients.
- Local SQLite persists practice data under the ignored .data folder.

**Checkpoint:** Only one app uses port 4310. Open the page and confirm it is this Build checkout.

[Reference](../00-course-map/START-HERE.md)

## 09. Read the source before proposing.

03 / Local app · Build

```text
Trace Northstar’s latest meeting in the actual app and source records. Show what Maya requested and cite demo-transcript-001. Explain which facts support the onboarding-checklist follow-up and which fields remain undecided. Inspect the implementation of evidence labels and unavailable transcripts. Do not save a task or turn a proposed owner/date into a meeting fact.
```

**Expected output**

- Northstar’s request is tied to demo-transcript-001.
- The missing agreed owner and deadline are stated clearly.
- Cedar’s unavailable transcript and Atlas’s lack of meetings remain distinct.

**Checkpoint:** Every claim is supported by the selected client’s own evidence.

[Reference](../01-planning/SPEC.md)

## 10. Review. Then save.

03 / Local app · Build

```text
Verify the Northstar review-and-save workflow against the reference. The proposed title is “Prepare the onboarding checklist”; Alex Morgan and the date two days ahead are proposed defaults, not agreed meeting facts. Let the user inspect and change title, owner, and date before confirmation. Verify that saving requires confirmation and a valid date, retains source provenance, and uses the existing idempotency mechanism. Run the relevant tests and report the result.
```

**Expected output**

- A review surface shows the exact task values before saving.
- Unconfirmed or invalid-date requests fail.
- The saved task keeps its source provenance.

**Checkpoint:** Do not describe a suggestion as a saved task until the confirmed save succeeds.

[Reference](../04-verification/VERIFICATION.md)

## 11. Prove that one save means one task.

03 / Local app · Build

```text
Test the task-save API and UI with the supplied verification instructions. Repeat an identical operation ID and payload: there must be one task. Reuse that operation ID with a changed payload: expect a conflict, not a second save. Reload the browser and verify the task survives. Mark it done and verify that persists. Record actual results in 04-verification/DEMO-RESULTS.md; do not reuse the reference receipts as proof of this run.
```

**Expected output**

- Identical replay produces no duplicate.
- A conflicting replay is rejected with HTTP 409.
- Saved task and done status survive reload.

**Checkpoint:** Keep request/test evidence and a short observed UI receipt.

[Reference](../04-verification/VERIFICATION.md)

## 12. Walk the whole workspace.

04 / Complete the CRM · Build

```text
Verify the copied reference screens: workspace overview, client list, selected client, meetings, tasks, and calendar. Check the reference’s available search/filter controls, selected states, empty states, and unavailable-evidence behavior. Exercise Northstar, Cedar, and Atlas. Compare the layout to the reference screenshots and record specific discrepancies. Fix a discrepancy only after tracing its cause; preserve the original design and domain behavior.
```

**Expected output**

- All reference screens and navigation are reachable.
- Northstar, Cedar, and Atlas demonstrate different evidence states.
- Empty and error states are understandable.

**Checkpoint:** No placeholder button silently does nothing in a demonstrated workflow.

[Reference](../04-verification/screenshots/navy-workspace-desktop.png)

## 13. Import a meeting once.

04 / Complete the CRM · Build

```text
Read the supplied meeting-import fixture and import implementation. Import the fictional meeting through the supported interface. Repeat the same source import and verify idempotence. Attempt to associate that same source with a different client and verify rejection. Keep CLI and browser workspace identities explicit. Record where the imported meeting appears and its source identifier.
```

**Expected output**

- A valid meeting import appears in the correct workspace.
- Repeating the source does not create a duplicate.
- The same source cannot be reassigned to another client.

**Checkpoint:** Verify the target identity before declaring an import missing.

[Reference](../01-planning/sample-data/meeting.json)

## 14. Put the event on the calendar.

04 / Complete the CRM · Build

```text
Read the supplied calendar-event fixture and import implementation. Import it using the supported route, verify its scheduled status and America/Toronto timezone, and check the client/calendar views. Repeat the import to verify source handling. Explain the event’s scheduled time separately from any task due date; do not infer that the meeting agreed a task deadline.
```

**Expected output**

- The event appears with the expected client and scheduled time.
- Timezone and status match the fixture.
- Calendar evidence and proposed task dates remain separate.

**Checkpoint:** Reload and verify the event is still present in the same workspace.

[Reference](../01-planning/sample-data/event.json)

## 15. Export something you can trust.

04 / Complete the CRM · Build

```text
Export the selected client’s Markdown brief using the app. Inspect the generated file, not only the button response. Verify factual statements have nearby source IDs, unknowns are explicit, and suggested next steps are clearly separate. Include the current saved records and do not leak another client’s context. If native document access is available, open the exported file there; otherwise give me the file for manual inspection.
```

**Expected output**

- A real Markdown file downloads.
- Sources accompany facts; proposals are labeled.
- The exported client and current records match the UI.

**Checkpoint:** Open and read the actual exported artifact.

[Reference](../04-verification/VERIFICATION.md)

## 16. Use the same data from the terminal.

05 / Tools + quality · Build

```text
Inspect scripts/clientdesk.ts and its documented commands in 03-build/clientdesk. Show the CLI help and use its supported read commands to find Northstar’s evidence. Explain the persisted HTTP session identity and how it differs from a browser workspace. Demonstrate an import only with the supplied fictional fixture and in the intended CLI workspace. Use documented commands rather than inventing flags.
```

**Expected output**

- CLI reads return source-backed client evidence.
- The CLI session is persistent and identified.
- Browser and CLI state are not assumed to be shared.

**Checkpoint:** Record the actual command and source ID returned.

[Reference](../03-build/clientdesk/scripts/clientdesk.ts)

## 17. Connect Claude to client evidence.

05 / Tools + quality · Build

```text
Read the supplied .mcp.json and scripts/mcp.mjs. Verify the server path resolves from this Build root and CLIENTDESK_URL points to http://127.0.0.1:4310. Explain how to approve this trusted server and restart the Claude Code session if required. Discover client_evidence, then use it to find Northstar’s latest meeting. Cite its source, say what remains undecided, and do not save a task. Do not place credentials in .mcp.json.
```

**Expected output**

- The ClientDesk MCP server is discoverable in the session.
- client_evidence returns the expected Northstar source.
- The response does not perform a task write.

**Checkpoint:** Tool discovery and a real tool response both succeed; config alone is not proof.

[Reference](../03-build/clientdesk/scripts/mcp.mjs)

## 18. Check the actual interface.

05 / Tools + quality · Build

```text
Inspect the running app in a real browser at desktop size and at 390 CSS pixels wide. Check navigation, the latest meeting, source labels, review fields, save, empty states, focus order, and keyboard activation. Confirm no horizontal overflow or obscured action. Record specific observed defects and fix them against the reference. If you cannot operate a browser, provide the exact manual checklist and mark it unverified; do not claim visual inspection.
```

**Expected output**

- Desktop and phone layouts remain usable.
- Keyboard users can reach and operate the review flow.
- Evidence contains observed passes or specific defects.

**Checkpoint:** Repeat the failed interaction after each fix; a build result does not establish UI quality.

[Reference](../04-verification/screenshots/client-phone-vercel.png)

## 19. Save a verified local checkpoint.

05 / Tools + quality · Build

```text
From 03-build/clientdesk run npm test, npm run typecheck, and npm run build. With the local app running, run npm run test:http in a second terminal. Resolve failures and rerun affected checks. Record commands, results, known limitations, and source differences in 04-verification/DEMO-RESULTS.md. Commit only reviewed non-secret source and docs as the local-app checkpoint. Keep .data, environment values, and credentials out of Git.
```

**Expected output**

- Unit, type, production-build, and HTTP checks pass.
- The local checkpoint has an identifiable Git commit.
- Known limitations are documented without claiming unperformed checks.

**Checkpoint:** Do not proceed to hosting with an unexplained failing check.

[Reference](../04-verification/VERIFICATION.md)

## 20. Create the hosted database.

06 / Database + web · Build

```text
Read 05-deployment/SETUP.md. Help me configure my own dedicated Supabase project. Apply 03-build/clientdesk/supabase/migrations/202609060001_workspace.sql and then 202609060002_workspace_shape.sql. Enable anonymous sign-ins. Configure SUPABASE_URL and SUPABASE_ANON_KEY using the project’s expected anonymous key in ignored local environment settings. Do not use a service-role key, print secrets, or commit values. Identify any account action I must complete myself.
```

**Expected output**

- Both migrations are applied in order.
- Anonymous sign-ins are enabled.
- The app’s expected environment names are configured privately.

**Checkpoint:** This is an isolated anonymous practice workspace, not named-user team authentication.

[Reference](../05-deployment/SETUP.md)

## 21. Prove workspace isolation.

06 / Database + web · Build

```text
Read and run the supplied Supabase RLS verification script using the configured project. Verify two independent identities cannot read, update, or delete each other’s workspace; unauthenticated access must be rejected. Verify the existing compare-and-swap behavior prevents lost updates. Record redacted results. Do not weaken row-level security to make a test pass. Resolve configuration or migration issues before deploying.
```

**Expected output**

- Cross-identity read and mutation attempts are rejected.
- Unauthenticated access fails.
- Concurrent stale writes do not silently overwrite current data.

**Checkpoint:** Retain the verifier result from your own Supabase project.

[Reference](../03-build/clientdesk/scripts/verify-rls.mjs)

## 22. Publish the CRM to Vercel.

06 / Database + web · Build

```text
Read the Vercel setup in 05-deployment/SETUP.md. Confirm my intended account and project. Push the reviewed Build source to my chosen repository, then configure Vercel with root 03-build/clientdesk, Next.js, and Node 24. Set SUPABASE_URL and SUPABASE_ANON_KEY privately for the intended deployment environment. Run the checks, deploy that reviewed commit, and record the resulting URL and commit. Never deploy the local SQLite fallback as hosted storage.
```

**Expected output**

- A successful Vercel deployment has an exact URL and source commit.
- Its environment points to the intended Supabase project.
- The deployed app loads the ClientDesk workspace.

**Checkpoint:** Verify the actual deployed environment; preview and production settings can differ.

[Reference](../05-deployment/SETUP.md)

## 23. Save at the real URL.

06 / Database + web · Build

```text
At the new Vercel URL, use a fresh browser identity. Open Northstar, review and confirm a task, reload, and verify it persists. Check the narrow layout and brief export. Confirm the hosted application is using Supabase and that a separate browser identity has an isolated workspace. Record observed results at this exact URL, with no secret values. Do not cite the course reference URL as proof of my deployment.
```

**Expected output**

- A task saved on the deployed site survives reload.
- A separate browser identity cannot see that task.
- Phone layout and export work at the deployed origin.

**Checkpoint:** The URL in the verification receipt must be your deployment.

[Reference](../05-deployment/SETUP.md)

## 24. Understand print mode first.

07 / Claude chat · Build

```text
Read 00-course-map/headless-example and 05-deployment/LOCAL-CLAUDE-CHAT.md. Explain the path from a client question to a Claude Code print-mode process and back to the UI. Demonstrate the documented one-request example using the intended signed-in account. Explain that print mode still calls the online Claude service and consumes that account’s usage. Verify restrictions in the application; print mode alone does not disable tools.
```

**Expected output**

- A small print-mode request returns a response.
- The account and usage implications are clear.
- Read-only controls are located in code, not assumed from -p.

**Checkpoint:** Do not substitute an API-key integration for the supplied Claude Code architecture.

[Reference](../05-deployment/LOCAL-CLAUDE-CHAT.md)

## 25. Prove chat on localhost.

07 / Claude chat · Build

```text
Inspect the reference local Ask Claude implementation. Enable CLIENTDESK_LOCAL_CHAT=1 in ignored .env.local and restart the app at localhost:4310 as documented. Verify only selected-client records and bounded recent conversation reach Claude, with tools and writes disabled. Ask Northstar what to prepare; require a source citation and separate suggestions. Ask Atlas the same question; it must acknowledge missing meeting evidence. Check Stop, timeout, and useful errors.
```

**Expected output**

- Northstar returns a sourced answer.
- Atlas acknowledges the lack of meeting notes.
- Stop and error states behave visibly, and no task is saved by chat.

**Checkpoint:** Local chat working does not make your laptop reachable from Vercel.

[Reference](../05-deployment/LOCAL-CLAUDE-CHAT.md)

## 26. Bring in the hosted chat worker.

07 / Claude chat · Build

```text
Copy tracked 03-build/clientdesk-chat from ../Reference into Build without credentials, environment files, dependencies, or runtime data. Preserve its Dockerfile and lockfile. Read 05-deployment/HOSTED-CLAUDE-CHAT.md. Run npm ci, npm test, npm run typecheck, and node --import tsx scripts/inspect-tools.mjs from the worker folder. Explain the reference’s Claude Code version, Sonnet/low selection, input bounds, disabled tools, cancellation, timeout, and usage limits. Do not silently change the worker model to match the authoring model.
```

**Expected output**

- The exact worker source and lockfile are present.
- Worker tests, types, and tool inspection pass.
- Fake-provider inspection is distinguished from real account authorization.

**Checkpoint:** The worker can only answer from supplied context; it cannot edit files or save tasks.

[Reference](../05-deployment/HOSTED-CLAUDE-CHAT.md)

## 27. Give Railway a persistent home.

07 / Claude chat · Build

```text
Following 05-deployment/HOSTED-CLAUDE-CHAT.md, create the Railway service in my intended project using root 03-build/clientdesk-chat and its Dockerfile. Attach a persistent volume at /data, generate a service domain, and configure the documented private variables including distinct CHAT_SERVICE_TOKEN and CHAT_ACCESS_CODE. Preserve the documented authentication directory and limits. Do not place secrets in Git or logs. Deploy and verify health before connecting the frontend.
```

**Expected output**

- Railway runs the worker and has a service domain.
- The /data volume persists required account and usage state.
- The service token and visitor access code are distinct private values.

**Checkpoint:** A healthy process still needs valid Claude account authorization.

[Reference](../05-deployment/HOSTED-CLAUDE-CHAT.md)

## 28. Authorize the intended Claude account.

07 / Claude chat · Build

```text
Use the hosted chat guide’s login procedure for the Railway worker, including railway ssh node scripts/login.mjs where applicable. Guide me through the browser authorization myself using the intended course account. Keep credentials inside the configured persistent private location; never print or commit them. Verify account readiness, then redeploy the worker and verify authorization still works. Do not enable extra usage or switch accounts silently.
```

**Expected output**

- The intended account authorizes the hosted worker.
- A real request works within the existing allowance.
- Authorization survives worker redeployment.

**Checkpoint:** If sign-in or allowance is unavailable, record that blocker; a health check cannot replace it.

[Reference](../05-deployment/HOSTED-CLAUDE-CHAT.md)

## 29. Connect the two deployments.

07 / Claude chat · Build

```text
Configure the Vercel app’s private CLIENTDESK_CHAT_URL and CLIENTDESK_CHAT_TOKEN to match the Railway worker. Set CLIENTDESK_APP_ORIGIN to the exact deployed frontend origin as the guide requires. Keep the service token server-side and never expose it to browser code. Redeploy Vercel after changing its environment. Verify the frontend reaches the correct worker, and that missing or invalid authorization fails cleanly.
```

**Expected output**

- The hosted frontend reaches the hosted worker.
- No service credential is shipped in browser assets.
- Invalid authorization returns a useful failure.

**Checkpoint:** Use the actual frontend origin and redeploy after environment changes.

[Reference](../05-deployment/HOSTED-CLAUDE-CHAT.md)

## 30. Test the complete hosted conversation.

07 / Claude chat · Build

```text
At my deployed Vercel URL, test hosted chat with the correct visitor access code. Northstar must answer with a valid source citation; Atlas must admit missing meeting evidence. Test a wrong code, Stop, retry, and a phone-sized layout. Verify chat does not save tasks and the separate reviewed-save flow still persists. Check documented usage-limit behavior with controlled tests, not a burst of paid requests. Record this URL, worker deployment, account readiness, and actual results.
```

**Expected output**

- Sourced answers and honest unknowns work on the hosted app.
- Wrong-code, cancellation, and retry paths are usable.
- Chat remains read-only; reviewed task saves still persist separately.

**Checkpoint:** Retain an end-to-end receipt from your deployment, not only isolated service tests.

[Reference](../05-deployment/HOSTED-CLAUDE-CHAT.md)

## 31. Package the client brief as a skill.

08 / Make it reusable · Build

```text
Inspect the supplied .claude/skills/client-brief/SKILL.md, its template, and example. Verify the skill accepts a client ID and brief date, requires explicit invocation with disable-model-invocation: true, reads the intended workspace’s evidence, and separates sources, unknowns, and recommendations. Test a valid client, unknown client, invalid date, and no-evidence client. Preserve the reference structure and record the results.
```

**Expected output**

- An explicitly invoked client-brief skill produces the expected structure.
- Invalid and missing-evidence inputs are handled clearly.
- The template and example agree with the skill instructions.

**Checkpoint:** Confirm which workspace identity the skill’s tools read.

[Reference](../.claude/skills/client-brief/SKILL.md)

## 32. Add a small, observable guardrail.

08 / Make it reusable · Build

```text
Read .claude/settings.example.json and 00-course-map/check-fixture.mjs. Explain the hook’s exact trigger and validation scope. Configure the exercise only in this demo project, preserving existing settings. Test a valid fixture and an intentionally invalid exercise copy; do not corrupt the canonical sample data. Show the resulting exit status and message. Explain what this hook does and what it does not protect.
```

**Expected output**

- Valid input passes and invalid exercise input fails.
- The hook’s trigger and limited scope are documented.
- Canonical source fixtures remain unchanged.

**Checkpoint:** Do not describe a fixture hook as a complete security boundary.

[Reference](../.claude/settings.example.json)

## 33. Start a genuinely fresh session.

08 / Make it reusable · Build

```text
Create a clean handoff in this Build repository containing the source commit, setup commands, current local and hosted URLs, completed checks, known limitations, and next action. Do not include secrets. Then, in a new Claude Code session opened at this project root, read CLAUDE.md and the handoff, discover the configured MCP server, and run the client-brief workflow. Record any missing instruction and repair the project documentation.
```

**Expected output**

- A fresh session locates the correct project and setup.
- MCP and the reusable workflow work with documented prerequisites.
- The handoff contains no credentials or unsupported pass claims.

**Checkpoint:** A session carrying old conversation context does not establish a fresh-session pass.

[Reference](../CLAUDE.md)

## 34. Release the whole story.

08 / Make it reusable · Build

```text
Review the final repository for secrets, runtime data, broken links, and misleading completion claims. Rerun checks affected by final changes. Update README with the actual app URL, this walkthrough, setup instructions, exact source baseline, deployment architecture, and known limitations. Save a final verification receipt with source commit and tested cases. Commit and push the reviewed release to the intended public repository. Verify the repository and walkthrough can be read without signing in.
```

**Expected output**

- A public repository links to the app, prompts, and walkthrough.
- The release identifies its source and actual verification status.
- A learner can follow the setup without private files.

**Checkpoint:** Expected results become verified results only when your run supplies the evidence.

[Reference](../README.md)

## If a checkpoint fails

```text
Stop at the current step. Compare the observed result with its expected outputs and the pinned reference. Show the exact error or mismatch and identify the cause. Propose the smallest correction that preserves the reference behavior and architecture. Apply it within the existing authorization, rerun the failed check, and record the actual result before advancing. Do not replace a failed integration with a mock or silently remove functionality.
```

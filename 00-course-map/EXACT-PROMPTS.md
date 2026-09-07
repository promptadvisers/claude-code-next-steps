# Prompts for replaying the real build

For the exact 133-slide sequence, use COURSE-PROMPTS.md and INSTRUCTOR-SCRIPT.md in this folder. This shorter collection explains the build stages.

These are reusable instructor prompts, written to reflect the decisions and steps actually implemented. They are not a fabricated transcript of tool calls. BUILD-LOG.md records the actual execution.

## 1. Establish the job
Read 01-planning/BRIEF.md and the existing course reference. Explain the first useful client journey, the user who completes it, and what is excluded. Identify decisions that block implementation. Do not build yet.

Why: supplies the real context and a stopping point before features multiply.

## 2. Review the specification
Review 01-planning/SPEC.md against the brief. For each requirement, name a visible behavior or test. Separate the first local milestone, durable hosted storage, and live provider setup. Flag any assumption the user has not made.

Why: turns a plausible plan into a checkable agreement.

## 3. Record the design
Use deep navy headers, restrained blue actions, cool white working surfaces, self-hosted Manrope and DM Sans, and a clear working layout. Keep O’Reilly red in the course deck branding. Keep meeting evidence beside proposed actions. Define loading, missing transcript, empty client and save-failure states. Save the design decisions and tokens before building the full interface.

Why: describes visible results and preserves the design as a reusable artifact.

## 4. Build the first milestone
Read the brief, spec and design files. Build the client directory, meeting detail and two-step follow-up review. Validate the exact save on the server, persist it, and show the read-back after refresh. Work in an exercise copy of Walkthrough Assets.

Why: limits the first implementation to the central user journey.

## 5. Inspect in the browser
Open the actual localhost app in the internal browser. Review Northstar, Cedar and Atlas. Check source visibility, unavailable notes and the empty state. At 390 pixels, complete the proposal/review path using the keyboard. Save screenshots and record any failed action before fixing it.

Why: tests the user’s action at the real rendering surface.

## 6. Connect and prove one record
Read the Fireflies adapter. Use 01-planning/sample-data/meeting.json and map the fictional transcript to Northstar. Preserve its source ID and time. Import it twice and prove that one meeting remains. The required classroom route is the sample import. A real teaching-account read is a separate optional extension.

Why: separates translation, identity and evidence from an optimistic connection message.

## 7. Verify the hosted boundary
Create two practice sessions. Save a task in the first, then prove the second cannot read or update it. Test the actual database policies as well as the app routes. Check retry conflicts and two simultaneous writes. Record passed, failed and untested checks separately.

Why: tests the enforcing layer, not the visual interface alone.

## 8. Create the reusable skill
Read .claude/skills/client-brief/SKILL.md. Verify the name, argument hint and manual invocation. Run it for Northstar with an explicit date using the authorized CLI/MCP session. The output must distinguish evidence, unknowns and proposed work, with no task save or message.

Why: tests the method another person will actually receive.

## 9. Deploy and verify
Review the changed files and dedicated Vercel project. Keep credentials in environment variables. Deploy the reviewed build, record its URL and commit, and repeat the client journey at that URL. Do not call the live integrations verified unless an actual provider read passed.

Why: a successful build or deployment is not proof that hosted behavior works.

## Complete recreation including local chat
Use 01-planning/REBUILD-GUIDE.md for the complete stage-by-stage prompt sequence. It includes the later chat extension and its database-context limits, local-only availability, cancellation, verification and hosted boundary.

# Instructor script

160 slides · expanded end-to-end edition · six labs. Speaker-note timings are estimates, not a rehearsed duration. Additional deployment walkthroughs require a fresh pacing rehearsal. Prompts are also collected in COURSE-PROMPTS.md.

## 1. Claude Code for Everyone: Next Steps

SLIDE 1 | Welcome | 0:00–0:01 (1 min)

SAY
Welcome to level two. Today we will plan a small business CRM, build a connected workflow, examine the interface with Claude, and package a repeatable method for another person. The important work is deciding what should exist and describing it precisely.

ON SCREEN
Welcome people, say your name, and leave the cover on screen while everyone settles.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Mark Kashef

## 2. Mark Kashef

SLIDE 2 | Welcome | 0:01–0:02 (1 min)

SAY
I run Prompt Advisers. My work combines building tools and teaching people how to work with them. The previous course introduced the pieces. Today I want you to see how those pieces fit together in a real project, including the decisions that happen before code.

ON SCREEN
Point to the three areas of your work. Say: A consultant following up after a call is our example today; it connects the business decision to the build.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Different backgrounds. One clear path.

## 3. Different backgrounds. One clear path.

SLIDE 3 | Welcome | 0:02–0:02:30 (0.5 min)

SAY
This is a level-two course, but we will define the vocabulary before using it. You do not need to memorize code. Your job is to describe the outcome, resolve decisions and inspect the result. A CRM is a customer relationship management tool: our small version keeps clients, meetings and follow-ups together.

ON SCREEN
Poll: have you built a tool since the first course? Invite a short example and identify anyone who will observe instead of build.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A reference to inspect. A build to own.

## 4. A reference to inspect. A build to own.

SLIDE 4 | Welcome | 0:02:30–0:03:30 (1 min)

SAY
The reference is our worked answer. A rebuild is a new implementation. Do not ask Claude to build an already completed app and call that a reconstruction. END-TO-END.md explains both paths. Preserve the same numbered folders in the rebuild so every slide path still resolves.

ON SCREEN
Show both folders side by side. Keep the reference closed to edits and open the rebuild as the active Claude Code project.

CHECK BEFORE CONTINUING
Everyone can identify which folder is the reference and which is their own work.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Four words we will use throughout

## 5. Four words we will use throughout

SLIDE 5 | Welcome | 0:03:30–0:04:30 (1 min)

SAY
Point at one real example of each term. A path such as 01-planning/BRIEF.md means open the planning folder, then the brief file. A leading dot in .claude is part of the folder name; your file browser may hide it.

ON SCREEN
Open the brief and sample meeting in the course kit. Show the path above each file.

CHECK BEFORE CONTINUING
Learners can find BRIEF.md from the project root.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
How to follow the demonstration

## 6. How to follow the demonstration

SLIDE 6 | Welcome | 0:04:30–0:05:30 (1 min)

SAY
We will follow the same pattern each time: explain the job, give Claude the prompt, inspect the result, and decide whether to continue. The exact prompt is on this slide and in COURSE-PROMPTS.md. Orientation: find the project before changing it. Boundary: reading first prevents accidental setup work.

ON SCREEN
Open Walkthrough Assets in Claude Code; use a separate copy for exercises.

EXACT PROMPT
Open Walkthrough Assets as the project root. Read its README, the brief and the start guide. Explain each folder and how to start the app. Do not change files yet.

WHY THIS PROMPT
Orientation: find the project before changing it.
Boundary: reading first prevents accidental setup work.

CHECK BEFORE CONTINUING
The app is in 03-build/clientdesk; the plan is in 01-planning.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Where do I type this?

## 7. Where do I type this?

SLIDE 7 | Welcome | 0:05:30–0:06:30 (1 min)

SAY
A terminal is an app for entering commands. Claude Code runs inside it, but its conversation is a different input mode. The slides say Tell Claude when you paste an English request. A shell command belongs at a normal terminal prompt. Keep the app server running in its own terminal while Claude works in another.

ON SCREEN
Point to the Claude conversation, a second terminal and the app browser. Explain that localhost means this computer and 4310 identifies this app’s local listening port.

CHECK BEFORE CONTINUING
Learners know where to paste a prompt and why the app terminal stays open.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
What you will leave with

## 8. What you will leave with

SLIDE 8 | Welcome | 0:06:30–0:08 (1.5 min)

SAY
Five outcomes organize the session. The CRM gives every outcome a concrete home. You can build along with the fictional client data or apply the planning exercises to your own workflow. The visible finish line is a client brief and a follow-up task backed by a meeting source.

ON SCREEN
Point to the five outcomes. Explain that there are planned build checkpoints and a fixture fallback.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The CRM we are building

## 9. The CRM we are building

SLIDE 9 | Welcome | 0:08–0:09 (1 min)

SAY
This is the reference interface for ClientDesk. It brings clients, recent meetings, next calls, and open tasks into one place. Treat it as a target for the journey, not a promise to reproduce every pixel. We will focus on one client and one useful workflow first.

ON SCREEN
Show the client list, Northstar meeting, upcoming call, and follow-up. Ask: could you tell what to do next without opening another app?

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
From meeting evidence to a reviewed task

## 10. From meeting evidence to a reviewed task

SLIDE 10 | Welcome | 0:09–0:10 (1 min)

SAY
This is our destination. We are not asking Claude to recreate a large CRM. We are asking it to make one recurring piece of work easier. The reference kit is a rehearsal and fallback, not evidence that a new build has already passed. Target: a visible user journey. Scope: one loop rather than a whole CRM suite.

ON SCREEN
Show the reference app, then return to the project conversation.

EXACT PROMPT
Describe the smallest version of this client workflow: open Northstar, read the latest meeting, review a suggested follow-up, and save it once. List the screens and information it needs. Do not add extra features.

WHY THIS PROMPT
Target: a visible user journey.
Scope: one loop rather than a whole CRM suite.

CHECK BEFORE CONTINUING
The proposed flow contains the four steps shown in the reference.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
One client. One useful loop.

## 11. One client. One useful loop.

SLIDE 11 | Welcome | 0:10–0:11:30 (1.5 min)

SAY
Imagine finishing a client call. Today the transcript, calendar, and task list live separately. Our first useful loop is to open the client, inspect the source, review a suggested action, and save it once. That gives us a concrete behavior to reverse engineer.

ON SCREEN
Narrate the Northstar example: Maya requested an onboarding checklist. A reviewer confirms the owner and due date before saving.

CHECK BEFORE CONTINUING
Northstar: Maya requests a checklist. Alex reviews the proposed date, then saves one task.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The plan is the product

## 12. The plan is the product

SLIDE 12 | The plan is the product | 0:11:30–0:12:30 (1 min)

SAY
A vague idea is an invitation for the model to guess. This section removes the guesses that matter: who uses the tool, what action it supports, where data comes from, and how we know the result works.

ON SCREEN
Open the planning worksheet beside Claude Code.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
What is worth building?

## 13. What is worth building?

SLIDE 13 | The plan is the product | 0:12:30–0:13 (0.5 min)

SAY
Being able to build more software does not make every idea worth building. Look for a job that repeats, a person who feels the friction, and an outcome you can observe. We are not replacing an entire business suite in one afternoon.

ON SCREEN
Ask attendees to name a recurring job they performed last week. Bring the discussion back to one owner and one result.

CHECK BEFORE CONTINUING
Prepare for Northstar’s next call.
Alex owns the follow-up.
The result is one reviewed task.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The first planning prompt

## 14. The first planning prompt

SLIDE 14 | The plan is the product | 0:13–0:14 (1 min)

SAY
I begin with the work that is painful. If I start by listing features, Claude can build a convincing interface for the wrong job. Listen for the difference between a problem and a proposed solution. Problem: starts with work, not software features. Conversation: one question makes the decision manageable.

ON SCREEN
Start a planning conversation in the project. Paste the prompt exactly.

EXACT PROMPT
Help me turn this recurring job into a short build brief: after a client call, I lose track of the agreed next action. Ask who uses the tool, what information they need, and what outcome would make it useful. Ask one question at a time.

WHY THIS PROMPT
Problem: starts with work, not software features.
Conversation: one question makes the decision manageable.

CHECK BEFORE CONTINUING
We have a named user, a recurring job, and a result we can observe.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Configure, connect, or build?

## 15. Configure, connect, or build?

SLIDE 15 | The plan is the product | 0:14–0:14:30 (0.5 min)

SAY
A custom app creates maintenance obligations. Sometimes a saved view or automation is enough. We are building this small CRM because the specific gap is getting from a meeting to a reviewed action in one place. That is the hypothesis the prototype should test.

ON SCREEN
Have learners classify their own idea as configure, connect, or build. No software purchase is required.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The vague request and the useful brief

## 16. The vague request and the useful brief

SLIDE 16 | The plan is the product | 0:14:30–0:15 (0.5 min)

SAY
The second brief gives Claude a user and a job. It does not overprescribe every implementation detail. The constraints prevent scope from expanding into billing, campaigns, proposals, and everything else we could possibly imagine.

ON SCREEN
Rewrite one vague audience example into the more specific form.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The answer that becomes the brief

## 17. The answer that becomes the brief

SLIDE 17 | The plan is the product | 0:15–0:16 (1 min)

SAY
This is the bridge from conversation to a reusable project document. I am making the product decisions. Claude is organizing them into something we can inspect and hand back to it later. Specificity: names the user and result. Exclusions: prevent plausible but unnecessary features.

ON SCREEN
Answer Claude’s questions, then paste this decision summary.

EXACT PROMPT
Use these decisions: Alex is a solo consultant. The first job is preparing a reviewed follow-up after Northstar’s call. Show the meeting evidence beside the proposed task. Exclude billing, campaigns, and automatic outreach. Draft 01-planning/BRIEF.md for my review.

WHY THIS PROMPT
Specificity: names the user and result.
Exclusions: prevent plausible but unnecessary features.

CHECK BEFORE CONTINUING
01-planning/BRIEF.md describes the same job and exclusions in plain English.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Our first release

## 18. Our first release

SLIDE 18 | The plan is the product | 0:16–0:17:30 (1.5 min)

SAY
The first vertical slice is deliberately small. The full blueprint includes upcoming calls and deployment, but we earn those after the core flow works. Sending email is outside the build. The course should finish a useful loop before adding new surfaces.

ON SCREEN
Point to each scope group. Ask which attractive extra feature would most threaten the session.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The user journey becomes the test

## 19. The user journey becomes the test

SLIDE 19 | The plan is the product | 0:17:30–0:19 (1.5 min)

SAY
A journey is more specific than a feature list. This sequence can become a browser test. The duplicate condition is part of the journey because the same meeting may arrive twice through a retry or another sync.

ON SCREEN
Read each step as an acceptance test. Ask what happens when no transcript exists.

CHECK BEFORE CONTINUING
A second import must not create a second copy.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Bring evidence into the CRM

## 20. Bring evidence into the CRM

SLIDE 20 | The plan is the product | 0:19–0:22 (3 min)

SAY
The same navy app runs locally and on Vercel. Local practice can use SQLite. Hosting uses an isolated Supabase workspace document and anonymous visitor identity. Fireflies and Calendly adapters accept validated records; the classroom uses fictional samples. Real provider reads remain a separate optional exercise.

ON SCREEN
Trace the source ID through an import, the stored workspace and the client page. Show 02-design/ARCHITECTURE.md for the actual storage decision.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
ClientDesk, from screen to services

## 21. ClientDesk, from screen to services

SLIDE 21 | Build it for real | 0:22–0:23 (1 min)

SAY
Read this as a cross-section. The browser is the screen. Vercel runs the web app and checks each request. Supabase holds the saved workspace records. For chat, Vercel selects only the chosen client’s records and sends a bounded evidence packet to Railway. Railway runs Claude Code in print mode, which contacts the Claude service. The answer returns along the same path. GitHub stores the source used to deploy; it is not in the live request path. Sample imports work without provider accounts. Live Fireflies and Calendly reads are an optional addition. A worker simply means the helper program handling chat behind the scenes. We will unpack that part before setting it up.

ON SCREEN
Trace a task save from the browser to Supabase. Then trace a chat question through Railway and back. Ask learners to identify where each piece runs.

CHECK BEFORE CONTINUING
Learners can locate the screen, saved records and the program that runs Claude.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
API, CLI, and MCP

## 22. API, CLI, and MCP

SLIDE 22 | The plan is the product | 0:23–0:24:30 (1.5 min)

SAY
An API is an application programming interface: the agreed requests software can make. A CLI is a command-line interface: commands a program understands. MCP is the Model Context Protocol: a standard an AI application uses to discover tools and call them. These describe different interfaces. A skill adds instructions for a recurring job, which we revisit with the project files.

ON SCREEN
Read each row through its example. Point out that the CLI is a program Claude can operate for us.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
How the interfaces connect

## 23. How the interfaces connect

SLIDE 23 | The plan is the product | 0:24:30–0:25:30 (1 min)

SAY
Start with Claude on the left. In the upper route, Claude runs a CLI command and the CLI requests data from a service API. In the lower route, Claude uses an MCP client to call a tool exposed by an MCP server, and that server calls the API. Both are valid routes. An MCP server can also wrap a CLI. Other tools work with local files or a database, so an external API is not mandatory. There is no universal API, then CLI, then MCP installation ladder.

ON SCREEN
Trace the upper route, then the lower one. Point at the shared API and explain that choosing a route depends on what the service supports.

CHECK BEFORE CONTINUING
Learners can describe two routes and understand that MCP can call an API directly.

IF THE DEMO STALLS
Explain the prepared example. Any uncompleted live setup remains a separate follow-up.

TRANSITION
One request through ClientDesk

## 24. One request through ClientDesk

SLIDE 24 | The plan is the product | 0:25:30–0:27 (1.5 min)

SAY
This example follows our actual MCP server. Claude calls client_evidence with northstar as the client ID. The server requests the ClientDesk workspace API, then selects Northstar’s meetings and tasks. Claude reads the returned evidence and identifies the latest meeting. The source stays attached to the answer. The classroom record was imported from fictional sample data; this does not imply a live Fireflies request. The CLI offers another route to the same workspace API. Its practice identity is separate from the browser identity.

ON SCREEN
Point from the request through client_evidence to /api/workspace, then to the source record. Later, replay the request during the MCP demonstration.

EXACT PROMPT
Find Northstar’s latest meeting. Cite the source ID and tell me what is still undecided.

CHECK BEFORE CONTINUING
The answer names demo-transcript-001 and separates the requested checklist from its undecided owner and delivery timing.

IF THE DEMO STALLS
Explain the prepared example. Any uncompleted live setup remains a separate follow-up.

TRANSITION
The tools have a job before setup

## 25. The tools have a job before setup

SLIDE 25 | The plan is the product | 0:27–0:28:30 (1.5 min)

SAY
Tool choice follows the blueprint. We do not need to install everything before knowing why it belongs. Each integration gets a small proof so setup failures are visible before the long build starts.

ON SCREEN
Mark each tool in the setup checklist as ready, fixture, or deferred. Explain that accounts and permissions are prepared before the class demo.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Ready before the first build

## 26. Ready before the first build

SLIDE 26 | The plan is the product | 0:28:30–0:29 (0.5 min)

SAY
You would not begin building a house with discharged tools. In this course, readiness means the project opens, commands run, and our test data is available. Live services should be prepared ahead of class. Nobody should spend the lab waiting on a consent screen.

ON SCREEN
Follow 00-course-map/START-HERE.md before the timer starts. Open Northstar and point to the fictional practice label.

CHECK BEFORE CONTINUING
Fictional sample records are the course’s “fixtures.”

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A workspace check before building

## 27. A workspace check before building

SLIDE 27 | The plan is the product | 0:29–0:30 (1 min)

SAY
A prerequisite is simply something the demo needs before it can run. We check it now so the exercise does not turn into a login troubleshooting session. The prepared sample data keeps the classroom moving. Readiness: use the project’s actual instructions. Clarity: surface one concrete blocker before the lab.

ON SCREEN
Complete this setup before class. In class, show the passing checkpoint.

EXACT PROMPT
Read 00-course-map/START-HERE.md. Check Node, install the locked dependencies in 03-build/clientdesk, prepare the demo context, and run the documented checks. Start the app on port 4310. Explain any blocker before continuing.

WHY THIS PROMPT
Readiness: use the project’s actual instructions.
Clarity: surface one concrete blocker before the lab.

CHECK BEFORE CONTINUING
Northstar opens at localhost:4310 and the current demo date is in 00-course-map/DEMO_CONTEXT.md.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Skills, rules, and hooks in this project

## 28. Skills, rules, and hooks in this project

SLIDE 28 | The plan is the product | 0:30–0:31:30 (1.5 min)

SAY
The first course named these tools. This course uses them together. A rule shapes the work, a skill provides a recurring method, and a hook can run a deterministic check. A written rule is guidance, not a security boundary.

ON SCREEN
Ask learners to place three examples into the right row before revealing the explanation.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Read the structure; let Claude write it

## 29. Read the structure; let Claude write it

SLIDE 29 | Build it for real | 0:31:30–0:32:30 (1 min)

SAY
These are text formats, not concepts you need to master today. Claude writes the punctuation. We read the names and intended values, then ask it to validate the file. In a folder tree, branches show which file belongs inside which folder.

ON SCREEN
Compare the opening lines of BRIEF.md, meeting.json and SKILL.md.

CHECK BEFORE CONTINUING
Learners can distinguish written guidance from structured settings.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Where Claude finds the instructions

## 30. Where Claude finds the instructions

SLIDE 30 | The plan is the product | 0:32:30–0:33 (0.5 min)

SAY
CLAUDE.md holds the short project contract. Rules can be grouped under .claude/rules. A skill gets its own folder and SKILL.md. Hook configuration belongs in settings.json. The MCP project file is .mcp.json at the repository root. This is the small map learners need.

ON SCREEN
Open the same files in the companion kit. Do not teach a hooks directory as a magic discovery location; a script must be referenced by hook configuration.

CHECK BEFORE CONTINUING
Project context
Scoped design rule
Reusable workflow
Hook configuration
Project MCP configuration

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Write the project instructions

## 31. Write the project instructions

SLIDE 31 | The plan is the product | 0:33–0:33:30 (0.5 min)

SAY
CLAUDE.md is the orientation note Claude can find again in a new conversation. I want it to explain the project and point to authoritative files, not become a transcript of everything we have said. Context: uses the files that actually exist. Maintenance: keeps instructions short enough to review.

ON SCREEN
Show CLAUDE.md in the project file list. Paste the request into Claude Code.

EXACT PROMPT
Read 01-planning/BRIEF.md, 01-planning/SPEC.md if present, and README.md. Create or update CLAUDE.md with the project purpose, file locations, start command, checks, and what requires human review. Keep it short and remove anything that merely repeats another file.

WHY THIS PROMPT
Context: uses the files that actually exist.
Maintenance: keeps instructions short enough to review.

CHECK BEFORE CONTINUING
The file points to the real start and check commands.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A rule Claude can actually apply

## 32. A rule Claude can actually apply

SLIDE 32 | The plan is the product | 0:33:30–0:34 (0.5 min)

SAY
Compare this to “make it beautiful.” The rule names visible behavior and the files it applies to. Use the actual directory in your project. A rule cannot guarantee compliance; visual checks and tests still establish the result.

ON SCREEN
Ask Claude to explain which requirement a proposed UI change satisfies. Show how a vague rule becomes an observable one.

CHECK BEFORE CONTINUING
.claude/rules/interface.md · excerpt from the actual project

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Turn a design preference into a rule

## 33. Turn a design preference into a rule

SLIDE 33 | The plan is the product | 0:34–0:34:30 (0.5 min)

SAY
Make it beautiful is hard to verify. Show the source beside the fact is easy to verify. This is how we turn taste and expectations into guidance that helps the next change. Observable: describes things we can see. Scoped: applies the guidance where interface changes happen.

ON SCREEN
Open .claude/rules. Compare Claude’s result with the example on the previous slide.

EXACT PROMPT
Create a rule in .claude/rules/interface.md for the interface files. Require visible sources beside meeting facts, distinct loading and error states, one clear primary action, and a phone-width review after changes. Show me the file and explain its scope.

WHY THIS PROMPT
Observable: describes things we can see.
Scoped: applies the guidance where interface changes happen.

CHECK BEFORE CONTINUING
The rule names the real interface path and four observable requirements.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Where a skill belongs

## 34. Where a skill belongs

SLIDE 34 | The plan is the product | 0:34:30–0:36 (1.5 min)

SAY
A project skill travels with the repository. A personal skill applies across your own projects. For a one-time task, inspect the relevant guidance and ask Claude to summarize the useful parts without installing it. The environment should stay understandable.

ON SCREEN
Use a design skill as the example. Explain why a CRM-specific schema should not be installed globally.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Review design guidance before using it

## 35. Review design guidance before using it

SLIDE 35 | The plan is the product | 0:36–0:37:30 (1.5 min)

SAY
Reading a repository does not mean trusting or executing it. Check what the skill asks Claude to do, what scripts can run, when it was tested, and who maintains it. Record the source revision so later changes are visible.

ON SCREEN
Open .claude/rules/interface.md. Use the local rule as the concrete review example; no external repository is required.

EXACT PROMPT
Read the supplied .claude/rules/interface.md without changing files. Explain its scope and observable checks. If reviewing an external design skill later, record its exact source revision and inspect scripts before using its guidance.

CHECK BEFORE CONTINUING
Classroom example: the supplied interface rule. External skills are an optional extension.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Enter Plan mode before changing files

## 36. Enter Plan mode before changing files

SLIDE 36 | Build it for real | 0:37:30–0:38:30 (1 min)

SAY
Plan mode lets us explore and work out the approach. It does not replace our specification. We will save the decisions to files so a new conversation can pick them up. If your interface uses a different control, ask Claude for the current steps and verify the displayed mode.

ON SCREEN
In the interactive Claude Code session, choose Plan mode with the permission-mode control; Shift+Tab cycles modes in the terminal. Confirm the status.

EXACT PROMPT
Help me switch this Claude Code session to Plan mode. Confirm it is active. Read the brief and design files, ask about missing decisions, and propose the build sequence before editing the app.

WHY THIS PROMPT
Mode: separates planning from implementation.
Evidence: reads the project before proposing work.

CHECK BEFORE CONTINUING
The session shows Plan mode and returns decisions and a plan.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
The planning conversation

## 37. The planning conversation

SLIDE 37 | The plan is the product | 0:38:30–0:39:30 (1 min)

SAY
Plan mode helps separate analysis from editing. But the useful output is the written specification, not the fact that a mode was enabled. Have Claude identify missing decisions, answer them deliberately, then save the plan.

ON SCREEN
Enter plan mode, supply the brief, and show the difference between a question that blocks the build and a reversible design choice.

EXACT PROMPT
We are building ClientDesk for a solo consultant. Read 01-planning/BRIEF.md and the sample records. Identify decisions that would block a useful first version. Ask me those questions before proposing the plan. Then outline the scope, screens, data, acceptance checks, and milestones. Do not build yet.

CHECK BEFORE CONTINUING
Where: Claude Code Plan mode. Review the proposed plan before asking Claude to save 01-planning/SPEC.md.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Answer the decisions that block the plan

## 38. Answer the decisions that block the plan

SLIDE 38 | The plan is the product | 0:39:30–0:40 (0.5 min)

SAY
Claude should ask about decisions that change the build. I do not need to choose every library now. I do need to decide who can save a task, what evidence supports it, and what belongs in the first version. Decisions: resolves the risky unknowns. Sequence: postpones setup that does not prove the first loop.

ON SCREEN
Read Claude’s questions aloud and give this decision summary.

EXACT PROMPT
For the first milestone, use fictional records and one local user. The task must show its supporting meeting, owner, and proposed due date before saving. Importing the same meeting twice must keep one copy. Defer hosting until this loop passes. Keep named sign-in outside this release. Update the proposed plan.

WHY THIS PROMPT
Decisions: resolves the risky unknowns.
Sequence: postpones setup that does not prove the first loop.

CHECK BEFORE CONTINUING
The plan separates the local first milestone from later live setup.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Why the planning prompt works

## 39. Why the planning prompt works

SLIDE 39 | The plan is the product | 0:40–0:40:30 (0.5 min)

SAY
Optimized here means reducing the guesses that would cause rework. There is no magic wording. The prompt supplies context, boundaries, a concrete output, and a check. Those are the parts I want learners to reuse. Grounding: checks against the agreed brief. Testability: turns vague requirements into observable outcomes.

ON SCREEN
Keep the plan and 01-planning/BRIEF.md visible together. Paste this review request.

EXACT PROMPT
Review the proposed plan against 01-planning/BRIEF.md. Identify any unstated assumption, extra feature, or requirement that cannot be checked. For each issue, propose the smallest clarification. Do not start implementation.

WHY THIS PROMPT
Grounding: checks against the agreed brief.
Testability: turns vague requirements into observable outcomes.

CHECK BEFORE CONTINUING
Every first-milestone requirement has a clear observation or test.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A specification Claude can execute

## 40. A specification Claude can execute

SLIDE 40 | The plan is the product | 0:40:30–0:41 (0.5 min)

SAY
The specification should be short enough to read and precise enough to act on. Each milestone ends in a visible artifact or test. If Claude can interpret a requirement in two incompatible ways, either choose one or name the decision it may make.

ON SCREEN
Open 01-planning/SPEC.md. Point to the exact first milestone and the definition of done.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Approve and save the specification

## 41. Approve and save the specification

SLIDE 41 | The plan is the product | 0:41–0:41:30 (0.5 min)

SAY
Planning and saving are separate actions. I first review the proposed plan. Then I authorize Claude to record it. This avoids teaching that a planning-only conversation has already written the files. Artifact: turns a chat answer into project files. Stop point: lets us read the contract before code changes.

ON SCREEN
After reviewing the plan, allow file editing and send this prompt. Open both resulting files.

EXACT PROMPT
I approve the reviewed plan. Save it to 01-planning/SPEC.md with the first-release scope, source fields, screens, failure behavior, acceptance checks, and milestones. Put the milestone checklist in 01-planning/MILESTONES.md. Do not build yet.

WHY THIS PROMPT
Artifact: turns a chat answer into project files.
Stop point: lets us read the contract before code changes.

CHECK BEFORE CONTINUING
01-planning/SPEC.md and 01-planning/MILESTONES.md agree on the first milestone.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Acceptance checks remove guesswork

## 42. Acceptance checks remove guesswork

SLIDE 42 | The plan is the product | 0:41:30–0:43 (1.5 min)

SAY
Acceptance checks include failure and permission cases. The hosted reference gives each browser an anonymous practice identity. We test whether a second identity is refused access to the first workspace’s records. Named account login is outside this release.

ON SCREEN
Add one concrete failure check to the audience plan. Ask how you would observe that it passes.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Milestones Claude can finish

## 43. Milestones Claude can finish

SLIDE 43 | The plan is the product | 0:43–0:43:30 (0.5 min)

SAY
Build in small vertical slices. The first one reaches a screen using sample data. The second changes the source without rewriting the entire app. The third proves the journey, and the fourth turns repeated steps into a method someone else can use.

ON SCREEN
Show the checklist in 01-planning/MILESTONES.md. Do not advance merely because the model says it is done.

CHECK BEFORE CONTINUING
The reference preserves each stage in 01-planning/MILESTONES.md and BUILD-LOG.md.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The checkpoint before implementation

## 44. The checkpoint before implementation

SLIDE 44 | The plan is the product | 0:43:30–0:44 (0.5 min)

SAY
This is my last inexpensive opportunity to catch a misunderstanding. I am listening for the same user, action, and result. A confident explanation is useful only when it matches the written agreement. Preview: reveals misunderstandings cheaply. Boundary: defines a finish line for the next request.

ON SCREEN
Keep 01-planning/SPEC.md open beside Claude’s response.

EXACT PROMPT
Read the first milestone and explain it back to me as a user journey. Name the files you expect to change, the checks you will run, and where you will stop. Flag anything that is still ambiguous. Do not edit yet.

WHY THIS PROMPT
Preview: reveals misunderstandings cheaply.
Boundary: defines a finish line for the next request.

CHECK BEFORE CONTINUING
The explanation matches the agreed journey and stopping point.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Your first build plan

## 45. Your first build plan

SLIDE 45 | The plan is the product | 0:44–0:52 (8 min)

SAY
This is the planning lab. Use the CRM example or your own recurring job. Spend two minutes on the user, three on scope and the journey, and three on acceptance checks. Keep the result small enough to finish.

ON SCREEN
Start an eight-minute timer. At minute four, remind people to cut scope. At minute seven, ask them to save the files.

CHECK BEFORE CONTINUING
01-planning/BRIEF.md + the first milestone in 01-planning/SPEC.md

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A plan review before code

## 46. A plan review before code

SLIDE 46 | The plan is the product | 0:52–0:53 (1 min)

SAY
A plan is ready when a second person can explain what it will do and how to test it. We should also know what it deliberately does not do. This review is cheaper than undoing a complete app that solved the wrong problem.

ON SCREEN
Invite one volunteer brief. Tighten one ambiguous requirement together.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The specification is ready to build

## 47. The specification is ready to build

SLIDE 47 | The plan is the product | 0:53–0:53:30 (0.5 min)

SAY
We now have the contract for the build. We know the target journey and the first checkpoint. Keep 01-planning/SPEC.md close; it is the reference when a generated feature looks attractive but does not belong.

ON SCREEN
Save the specification and point to the next milestone.

CHECK BEFORE CONTINUING
Northstar example: meeting source → reviewed proposal → one saved task after reload.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Questions + reset

## 48. Questions + reset

SLIDE 48 | The plan is the product | 0:53:30–0:54:30 (1 min)

SAY
Take one planning question and reset for the build. Continue to use the same CRM example so the second hour does not feel like a new course.

ON SCREEN
Return at the scheduled time. Queue longer setup questions.

CHECK BEFORE CONTINUING
Next: save the plan and build the first client workflow

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Build it for real

## 49. Build it for real

SLIDE 49 | Build it for real | 0:54:30–0:55:30 (1 min)

SAY
The plan is now the reference for a series of small builds. We will put it in a repository, prove a data connection, inspect the browser, and decide what can safely be shared.

ON SCREEN
Open the course project terminal and 01-planning/SPEC.md.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Project files and Git history

## 50. Project files and Git history

SLIDE 50 | Build it for real | 0:55:30–0:56 (0.5 min)

SAY
Saving a file changes the working copy. A Git commit records a named checkpoint. GitHub hosts a remote copy and supports review. The application host is a different service. These distinctions prevent a lot of confusion.

ON SCREEN
Show the folder, git status, and a commit side by side. Keep branch theory brief.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The project’s .gitignore file

## 51. The project’s .gitignore file

SLIDE 51 | Build it for real | 0:56–0:56:30 (0.5 min)

SAY
The ignore file keeps obvious local secrets and private data out of routine commits. It does not remove something already committed. Review the diff. If a secret ever reaches a remote, revoke it and address the history; deleting a line is not enough.

ON SCREEN
Open the provided .gitignore. Show the empty example environment file.

EXACT PROMPT
Set up the project’s ignore file so secrets, machine-specific settings, logs, and generated local data stay out of Git. Keep an empty example of the required environment variables. Show me what will be excluded.

CHECK BEFORE CONTINUING
Keep credentials, generated output and local records outside the reviewed Git checkpoint.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The first local checkpoint

## 52. The first local checkpoint

SLIDE 52 | Build it for real | 0:56:30–0:57:30 (1 min)

SAY
Initialize a repository in the intended folder. Stage specific files, inspect the staged diff, then commit. Avoid blindly staging a directory that may contain real transcripts or credentials. The learner kit contains fictional data.

ON SCREEN
Demonstrate in a fresh teaching copy. If it is already a repository, skip git init. Explain each command before executing it.

EXACT PROMPT
Save a local checkpoint of the agreed plan. Check whether this folder already uses Git. Show me the files you will include, exclude secrets and local data, then commit the reviewed files with a clear message.

CHECK BEFORE CONTINUING
Result: a named checkpoint we can return to. Claude chooses the required Git commands.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
What a checkpoint gives us

## 53. What a checkpoint gives us

SLIDE 53 | Build it for real | 0:57:30–0:58 (0.5 min)

SAY
A commit is a named snapshot. I do not need to memorize the command to benefit from it. I need to understand what was included and why this is a useful point to return to. Meaning: connects Git to a recoverable work habit. Safety: asks for comparison rather than a reset.

ON SCREEN
Show Claude’s summary and the file comparison in the editor.

EXACT PROMPT
Show the latest local checkpoint and summarize its included files. Explain how I could compare the current work with that checkpoint without discarding any changes.

WHY THIS PROMPT
Meaning: connects Git to a recoverable work habit.
Safety: asks for comparison rather than a reset.

CHECK BEFORE CONTINUING
The checkpoint contains the plan and no secret or generated data.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Git, GitHub, and the GitHub CLI

## 54. Git, GitHub, and the GitHub CLI

SLIDE 54 | Build it for real | 0:58–0:59 (1 min)

SAY
A repository is the project’s files together with their version history. Git records commits locally, even when we are offline. GitHub hosts a remote repository so we can share and review the work. The GitHub CLI, called gh, lets Claude manage GitHub from the terminal. GitHub hosts our code. Vercel runs the deployed application. Our plan and design files belong in the repository alongside the code.

ON SCREEN
Show the project folder and its existing Git history. Use the schematic to explain how a local checkpoint reaches GitHub and how Vercel deploys a chosen version.

CHECK BEFORE CONTINUING
Learners distinguish saving a file, committing a checkpoint, pushing to GitHub and deploying the app.

IF THE DEMO STALLS
Explain the prepared example. Any uncompleted live setup remains a separate follow-up.

TRANSITION
A GitHub connection, in plain English

## 55. A GitHub connection, in plain English

SLIDE 55 | Build it for real | 0:59–1:01 (2 min)

SAY
I describe the outcome in ordinary language. Claude can check Git and the GitHub CLI, choose installation steps for this machine, and guide me through browser sign-in. I complete that sign-in myself. Then I ask it to verify the account. The built-in /install-github-app command sets up Claude GitHub Actions for a repository; it is a separate workflow. We do not use an invented /install github command. Today the instructor machine should already be prepared, so this is a short setup check rather than a timed installation race.

ON SCREEN
In Claude Code at the project root, send this prompt. Complete any browser sign-in, then inspect the returned account and connection result.

EXACT PROMPT
Help me connect this project to GitHub. Check what’s already installed, set up anything missing, guide me through signing in, and verify the connection. Explain any steps I need to complete myself.

WHY THIS PROMPT
Inspect first: reuse the existing setup.
Guide me: pause for my sign-in.
Verify: show the connected account.

CHECK BEFORE CONTINUING
Claude identifies the signed-in account and reports that GitHub access works. Repository creation comes next.

IF THE DEMO STALLS
If setup exceeds two minutes, use the prepared teaching account for the demonstration and have learners finish setup with the same prompt outside the timed exercise.

TRANSITION
A private GitHub repository

## 56. A private GitHub repository

SLIDE 56 | Build it for real | 1:01–1:02 (1 min)

SAY
The GitHub CLI can create a private repository and push a committed local project. First verify the intended account and repository name. The command assumes there is no existing origin and that you are using your own teaching repository.

ON SCREEN
Show the confirmation in GitHub. If origin already exists, inspect it instead of recreating it. Do not publish the course kit to a personal account by accident.

EXACT PROMPT
Create a private GitHub repository for this project using the account I have signed in to. First show me the account, repository name, and files to upload. Check for an existing remote. After I confirm those details, upload the reviewed checkpoint.

CHECK BEFORE CONTINUING
Result: a private repository containing the reviewed files. A remote is the project’s linked online repository.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Verify the repository before moving on

## 57. Verify the repository before moving on

SLIDE 57 | Build it for real | 1:02–1:02:30 (0.5 min)

SAY
Creating a repository is not the finish line. I look at the actual result. This is the same habit we will use for a database record, a browser fix, and a shared skill. Verification: checks the actual destination. Visibility: makes the private/public choice explicit.

ON SCREEN
Open the repository Claude created in the browser.

EXACT PROMPT
Show the repository URL, visibility, account owner, and latest uploaded checkpoint. Compare the uploaded files with the reviewed list. If anything is missing or unexpected, explain it before changing the repository.

WHY THIS PROMPT
Verification: checks the actual destination.
Visibility: makes the private/public choice explicit.

CHECK BEFORE CONTINUING
The browser shows the intended private repository and reviewed files.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Give the build a visual direction

## 58. Give the build a visual direction

SLIDE 58 | Build it for real | 1:02:30–1:03:30 (1 min)

SAY
Design guidance is an input to the build. We describe what deserves attention and use real font and spacing choices. The course deck keeps O’Reilly red; the app has its own navy identity.

ON SCREEN
Open the design folder and the actual reference screen, then send the prompt.

EXACT PROMPT
Read 02-design/DESIGN.md and its assets. Use deep navy, quiet surfaces, Manrope headings and DM Sans body text. Make meeting evidence and the next action easy to find. Show the desktop and phone layout plan before implementation.

WHY THIS PROMPT
Specificity: names hierarchy, fonts and color.
Continuity: reuses saved design decisions.

CHECK BEFORE CONTINUING
The layout has a clear reading order and a phone plan.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Create the app’s starting structure

## 59. Create the app’s starting structure

SLIDE 59 | Build it for real | 1:03:30–1:04:30 (1 min)

SAY
Next.js provides the page and server structure. TypeScript helps catch incompatible values. Node runs the server. package.json records dependencies and named commands. The reference lockfile records exact resolved versions; use npm ci when reproducing that source. A fresh generated build should record its own lockfile and checks.

ON SCREEN
Use the rebuild folder. Open package.json and compare the scripts with the reference.

EXACT PROMPT
In this rebuild, create 03-build/clientdesk using Next.js, TypeScript and Node 24. Add the documented dependencies and scripts. Create the page, server routes and sample storage structure from SPEC.md. Start it on port 4310 and show a working page.

WHY THIS PROMPT
Foundation: makes the project runnable.
Check: proves setup before adding features.

CHECK BEFORE CONTINUING
The page opens locally and the build and type checks pass.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
The first implementation request

## 60. The first implementation request

SLIDE 60 | Build it for real | 1:04:30–1:12:30 (8 min)

SAY
This request narrows the scope to one milestone and requires evidence. It lets Claude decide ordinary code details while preventing it from silently implementing the entire backlog. The milestone is complete when the behavior can be demonstrated.

ON SCREEN
Use a separate working copy. Keep the finished reference on port 4310.

EXACT PROMPT
Read 01-planning/SPEC.md and 01-planning/MILESTONES.md. Build the first client workflow in 03-build/clientdesk with fictional records: meeting evidence, an editable follow-up, review, and save. Run the agreed checks and show the result in the browser. Stop before adding live services.

CHECK BEFORE CONTINUING
While Claude works, inspect the acceptance checks and prepared reference.

IF THE DEMO STALLS
At six minutes, if the slice is still building, show the completed reference and name the unfinished work. Do not present it as the new build’s result.

TRANSITION
Read the build result like a reviewer

## 61. Read the build result like a reviewer

SLIDE 61 | Build it for real | 1:12:30–1:15:30 (3 min)

SAY
I am not reviewing every line of code. I am reviewing the behavior we asked for. If Claude says something works, I ask what it observed. A check that was not run stays unverified. Evidence: prevents a success summary from becoming the test. Honesty: distinguishes passed from untested.

ON SCREEN
Wait for the build to finish. Open the local URL Claude reports.

EXACT PROMPT
Compare the changed files and check results with the first milestone. Open the actual app and explain what passes, what is incomplete, and where you stopped.

WHY THIS PROMPT
Evidence: prevents a success summary from becoming the test.
Honesty: distinguishes passed from untested.

CHECK BEFORE CONTINUING
The screen and checks support the claim; unfinished work stays named.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Complete the CRM around the first loop

## 62. Complete the CRM around the first loop

SLIDE 62 | Build it for real | 1:15:30–1:16:30 (1 min)

SAY
The first loop proves one useful journey. It is not the entire application. We now widen the implementation deliberately. Save behavior, missing data and errors are features too. Do not accept a button that only looks finished.

ON SCREEN
Compare the SPEC.md feature list with the running rebuild, marking complete, missing or failed.

EXACT PROMPT
Now add the remaining SPEC.md screens: client list and details, meetings, upcoming calls, follow-ups, Connections and brief export. Include client creation, task review, completion and reload behavior. Work in milestones and show the test result for each.

WHY THIS PROMPT
Coverage: names the remaining screens.
Milestones: exposes unfinished behavior early.

CHECK BEFORE CONTINUING
Every required screen works; saved changes survive reload.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
The data model stays small

## 63. The data model stays small

SLIDE 63 | Build it for real | 1:16:30–1:17 (0.5 min)

SAY
The client is the common link. A meeting keeps the provider and original source ID. A task keeps its meeting ID so someone can verify where the suggestion came from. Dates and unknown values need consistent handling at the adapter boundary.

ON SCREEN
Trace one task back to one meeting and one client. Explain why a company name alone is a poor unique identifier.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The classroom connection path

## 64. The classroom connection path

SLIDE 64 | Build it for real | 1:17–1:17:30 (0.5 min)

SAY
Everyone follows the fictional import path during this course. It exercises the same mapping and validation boundary. A live provider read is an optional extension with its own account preparation and recorded result.

ON SCREEN
Open Connections. Point to Sample source before opening Import record.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Inspect the source connection

## 65. Inspect the source connection

SLIDE 65 | Build it for real | 1:17:30–1:18:30 (1 min)

SAY
An adapter translates a service’s response into the record our app expects. We change that small boundary first. We do not rewrite the screen just because the source changed. Isolation: changes one source while preserving the working journey. Contract: keeps the screen independent of provider details.

ON SCREEN
Show the sample record and its adapter in the project.

EXACT PROMPT
Open Connections and inspect the supplied sample meeting. Explain how its source ID, client and summary reach the app. Use the fictional record for this demonstration.

WHY THIS PROMPT
Isolation: changes one source while preserving the working journey.
Contract: keeps the screen independent of provider details.

CHECK BEFORE CONTINUING
The app says Sample source; no live connection is implied.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The meeting record the app needs

## 66. The meeting record the app needs

SLIDE 66 | Build it for real | 1:18:30–1:19 (0.5 min)

SAY
This is the app contract, not a claim about the provider response format. The adapter transforms the provider data and validates the required fields at runtime. A TypeScript interface alone does not validate a network response.

ON SCREEN
Show the raw fixture beside the normalized meeting. Point to the preserved source ID.

CHECK BEFORE CONTINUING
App record after normalization. This is not the provider’s raw response.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Fireflies records retain their source

## 67. Fireflies records retain their source

SLIDE 67 | Build it for real | 1:19–1:19:30 (0.5 min)

SAY
Fireflies provides a GraphQL API. Ask only for the fields the CRM needs and handle missing transcripts explicitly. Match the record through an explicit client mapping. Do not guess the client from a similar company name.

ON SCREEN
Open the sample record beside Connections. Explain the mapping without logging into Fireflies.

CHECK BEFORE CONTINUING
Classroom source: 01-planning/sample-data/meeting.json. Live API reads are optional.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Import the meeting and prove it

## 68. Import the meeting and prove it

SLIDE 68 | Build it for real | 1:19:30–1:22:30 (3 min)

SAY
This prompt names a result and the checks that matter. Claude can choose the API or CLI steps supported by our setup. I still decide which account and record it may use. Scope: one transcript makes failures easier to diagnose. Traceability: preserves the source and duplicate check.

ON SCREEN
Connections → Import record → Northstar → inspect JSON → Import meeting. Repeat the same import.

EXACT PROMPT
Use the fictional Northstar meeting in 01-planning/sample-data/meeting.json. Import it into this browser’s practice workspace. Compare the source ID with the client page. Import it again and confirm the meeting count stays the same.

WHY THIS PROMPT
Scope: one transcript makes failures easier to diagnose.
Traceability: preserves the source and duplicate check.

CHECK BEFORE CONTINUING
The source ID is unchanged and the second import does not increase the count.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Calendly records keep time and status

## 69. Calendly records keep time and status

SLIDE 69 | Build it for real | 1:22:30–1:23 (0.5 min)

SAY
Calendly supplies upcoming scheduling context. Preserve the provider event ID and timezone. A canceled event should not continue to appear as the next call. Keep this separate from the meeting transcript because they have different lifecycles.

ON SCREEN
Open the fictional event file and compare it with Northstar’s next-call card.

CHECK BEFORE CONTINUING
Classroom source: 01-planning/sample-data/event.json. Canceled events must not become the next call.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The upcoming-call check

## 70. The upcoming-call check

SLIDE 70 | Build it for real | 1:23–1:24 (1 min)

SAY
The calendar tells us when the next conversation happens. It does not tell us that a task was promised. We keep those meanings separate even though the information appears on the same page. Identity: avoids matching people by a similar name. Time: preserves the event’s actual timezone.

ON SCREEN
Connections → Import event → Northstar → paste the sample event → Import event. Compare the updated next-call card.

EXACT PROMPT
Import the fictional event in 01-planning/sample-data/event.json for Northstar. Compare its source ID, timezone and status with the upcoming-call card. Explain why a scheduled call does not create an agreed task deadline.

WHY THIS PROMPT
Identity: avoids matching people by a similar name.
Time: preserves the event’s actual timezone.

CHECK BEFORE CONTINUING
The event remains separate from the meeting and from a proposed task date.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Supabase: records and identity

## 71. Supabase: records and identity

SLIDE 71 | Build it for real | 1:24–1:24:30 (0.5 min)

SAY
The actual implementation stores a versioned workspace document in Supabase with row ownership. Each browser receives an anonymous practice identity. This is appropriate for a fictional teaching workspace; it is not a finished team-account product.

ON SCREEN
Open 03-build/clientdesk/README.md and 01-planning/DECISIONS.md. Explain the recorded storage tradeoff.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Local storage and hosted storage

## 72. Local storage and hosted storage

SLIDE 72 | Build it for real | 1:24:30–1:25:30 (1 min)

SAY
A database stores information so it is available after the page closes or the server restarts. Locally we use SQLite. On Vercel the app requires Supabase because local server files are not our durable database. Row-level security means the database checks which identity may access each stored row. This reference stores a workspace document in an owned row.

ON SCREEN
Open the storage decision and the two migration files. Explain that a migration is a recorded change to database structure or rules.

CHECK BEFORE CONTINUING
Learners understand why deploying code alone does not create the hosted database.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Create your Supabase project

## 73. Create your Supabase project

SLIDE 73 | Build it for real | 1:25:30–1:26:30 (1 min)

SAY
Use your own project and record its reference. The migrations define the workspace table, ownership rules and expected data shape. Do not paste a fragment from a slide. Open and apply each full file. Anonymous sign-in creates a real authenticated identity without asking for a name or email; losing that browser identity can lose access to the practice workspace.

ON SCREEN
In your own Supabase account create a project. Use its SQL Editor for the two complete migration files, then Authentication settings to enable anonymous sign-ins.

EXACT PROMPT
Help me create a dedicated Supabase project for this fictional CRM. Apply both SQL migration files from the app’s supabase/migrations folder in filename order. Enable anonymous sign-ins. Verify that two visitor identities cannot read or change each other’s workspace.

WHY THIS PROMPT
Order: applies the recorded database setup.
Isolation: checks who can access records.

CHECK BEFORE CONTINUING
Both migrations succeed and the two-identity access check passes.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Ask for an access check in plain English

## 74. Ask for an access check in plain English

SLIDE 74 | Build it for real | 1:26:30–1:29:30 (3 min)

SAY
A hidden button does not protect a record. The server must refuse the wrong user. I ask for the behavior in plain English and then inspect the two results. Enforcement: tests the actual data boundary. Contrast: one allowed and one denied case prove different things.

ON SCREEN
In 03-build/clientdesk run npm run test:http; use verify-rls.mjs only with the dedicated configured teaching database.

EXACT PROMPT
Read the existing access tests. Run the documented check with two isolated practice identities. Show that one can access its records and the other cannot. Explain the enforced boundary and any untested deployment condition.

WHY THIS PROMPT
Enforcement: tests the actual data boundary.
Contrast: one allowed and one denied case prove different things.

CHECK BEFORE CONTINUING
Allowed and denied results are visible. Distinguish local repository tests from database-policy tests.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A repeatable connection check

## 75. A repeatable connection check

SLIDE 75 | Build it for real | 1:29:30–1:30 (0.5 min)

SAY
A connection is not complete when a token is accepted. We need the right account, the intended record, the expected data shape, and a visible result in the app. Save a redacted example so the next person can repeat the check.

ON SCREEN
Perform the four checks on a single sandbox record. Stop before expanding the sync to a whole account.

CHECK BEFORE CONTINUING
CLI and MCP share their own practice identity. The browser has a separate one; compare within the same workspace.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
MCP connects Claude to tools

## 76. MCP connects Claude to tools

SLIDE 76 | Build it for real | 1:30–1:32 (2 min)

SAY
MCP gives Claude a structured tool interface. It does not replace the API, provide unlimited access, or make tool output trustworthy. We will use a local read-only tool to investigate which meeting supports a proposed follow-up.

ON SCREEN
Show .mcp.json, then /mcp. Open the tool description before running it.

CHECK BEFORE CONTINUING
Claude requests a tool call. The server returns structured evidence from the service.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Give Claude a CLI and an MCP interface

## 77. Give Claude a CLI and an MCP interface

SLIDE 77 | Build it for real | 1:32–1:33 (1 min)

SAY
A wrapper is a small program that presents another program’s capabilities through a new interface. Our CLI and MCP server both call the existing app. They use a practice session separate from the browser, so compare evidence within the same identity.

ON SCREEN
Inspect scripts/clientdesk.ts, scripts/mcp.mjs and scripts/http-session.mjs in the reference app; implement their responsibilities in the rebuild.

EXACT PROMPT
Build the ClientDesk CLI and MCP server described in the spec. Reuse the app’s workspace API and identity handling. Support reading client evidence and preparing a sourced brief. Test the normal case, an unknown client and missing meeting data.

WHY THIS PROMPT
Reuse: keeps one source of app behavior.
Cases: proves the interface handles uncertainty.

CHECK BEFORE CONTINUING
The CLI and MCP return the same evidence in their shared practice workspace.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Connect the project’s MCP server

## 78. Connect the project’s MCP server

SLIDE 78 | Build it for real | 1:33–1:34 (1 min)

SAY
The configuration tells Claude how to start our MCP server. This is different from a service password. Dependencies must already be installed in the app folder. If connection fails, check the root folder, Node, dependencies and running app before changing the prompt.

ON SCREEN
From the project root inspect .mcp.json. It uses node, args 03-build/clientdesk/scripts/mcp.mjs, and CLIENTDESK_URL http://127.0.0.1:4310. Restart the Claude session after configuration changes.

EXACT PROMPT
Check that the app is running. Review the project-root .mcp.json and point its ClientDesk entry at our app’s scripts/mcp.mjs. Start Claude Code from this project root, approve the trusted server, and verify ClientDesk is connected in /mcp.

WHY THIS PROMPT
Location: makes relative paths resolve.
Verify: tests the connection before a question.

CHECK BEFORE CONTINUING
/mcp lists ClientDesk as connected and exposes client_evidence.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
A useful MCP question

## 79. A useful MCP question

SLIDE 79 | Build it for real | 1:34–1:37 (3 min)

SAY
This is a consequential use of MCP: it grounds a client brief in a specific meeting. If the tool reports no match, Claude should say so. Instructions embedded inside meeting content do not become instructions for the agent.

ON SCREEN
Run the read-only MCP tool from the kit. Confirm its result against the fixture file.

EXACT PROMPT
Use the ClientDesk tools to find Northstar’s latest meeting. Show the source ID and explain which follow-up the meeting supports. If the evidence is missing, say so. Do not save a task.

CHECK BEFORE CONTINUING
Before the prompt: use /mcp to check that the ClientDesk server and tools are available.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
What to inspect in the MCP answer

## 80. What to inspect in the MCP answer

SLIDE 80 | Build it for real | 1:37–1:37:30 (0.5 min)

SAY
MCP makes tools available to Claude. It does not make every answer correct. We inspect the evidence and the action boundary just as we would with any other integration. Separation: keeps facts distinct from suggestions. Boundary: proves a read request did not become a write.

ON SCREEN
Keep Claude’s tool answer and the meeting evidence visible.

EXACT PROMPT
Compare your answer with Northstar’s source meeting. Separate the quoted fact, any missing information, and your proposed follow-up. Show the source ID for the fact and confirm that no task was saved.

WHY THIS PROMPT
Separation: keeps facts distinct from suggestions.
Boundary: proves a read request did not become a write.

CHECK BEFORE CONTINUING
The checklist request is sourced, the date is unknown, and the task count is unchanged.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Import one meeting twice

## 81. Import one meeting twice

SLIDE 81 | Build it for real | 1:37:30–1:45:30 (8 min)

SAY
Use the working app. Read the source identifier before importing. On the second import, the count should remain the same. Record the visible source and the two counts. This is a sample import exercise; it does not require a Fireflies account.

ON SCREEN
Use 00-course-map/labs/02-connection.md. Start the timer and check for a visible source ID, not just a green test message.

CHECK BEFORE CONTINUING
One source record, two imports, no duplicate

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Working checkpoint: client evidence

## 82. Working checkpoint: client evidence

SLIDE 82 | Build it for real | 1:45:30–1:46:30 (1 min)

SAY
The client page should now answer a small number of questions: who is this client, what happened most recently, and what needs attention? The source is close to the meeting and task, where it is needed. We do not need a wall of metrics.

ON SCREEN
Compare the actual build with the journey. Have someone identify the next action without explanation.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A phone-sized screen, explained

## 83. A phone-sized screen, explained

SLIDE 83 | Build it for real | 1:46:30–1:47:30 (1 min)

SAY
Viewport means the part of the browser that displays the page. Three hundred and ninety pixels is a useful phone-sized test, not a magic number. I am shrinking the available space to see whether a person can still reach the next action. Comparison: changes one condition at a time. Purpose: tests the job rather than judging a tiny screenshot.

ON SCREEN
Open Chrome’s device toolbar, choose Responsive, and enter 390 for width. Or ask Claude’s browser tool to set that width.

EXACT PROMPT
Show Northstar’s page at desktop width, then at 390 pixels wide. Explain the difference in plain English. Keep the meeting and Review control visible so we can see whether the same job still works on a small screen.

WHY THIS PROMPT
Comparison: changes one condition at a time.
Purpose: tests the job rather than judging a tiny screenshot.

CHECK BEFORE CONTINUING
The audience sees the same page become phone-sized.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A design review with visible criteria

## 84. A design review with visible criteria

SLIDE 84 | Build it for real | 1:47:30–1:48 (0.5 min)

SAY
Good visual feedback names an element and a user consequence. The brief includes hierarchy, spacing, typography, and states. If the task cannot be identified quickly, that is a usability problem we can observe and fix.

ON SCREEN
Open the design rule from the planning section. Show how the same rule now guides a specific revision.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Claude in Chrome

## 85. Claude in Chrome

SLIDE 85 | Build it for real | 1:48–1:49 (1 min)

SAY
Use Claude Code with the browser extension to inspect the app it built. The current setup requires a supported Chromium browser, the extension, and direct plan sign-in. Check the official prerequisites before delivery; account and version support can change.

ON SCREEN
Show the extension connection and the local app URL. Ask Claude to identify the client name from the rendered page.

EXACT PROMPT
Help me connect this Claude Code session to Chrome. Check the current requirements and explain the setup steps I need to complete. Once connected, show the open ClientDesk page so I can confirm you have the right tab.

CHECK BEFORE CONTINUING
Where: start in Claude Code. The technical reference shows the terminal launch command and the in-session status command.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Confirm Claude can see the right page

## 86. Confirm Claude can see the right page

SLIDE 86 | Build it for real | 1:49–1:49:30 (0.5 min)

SAY
Before I ask Claude to test the page, I confirm it is looking at the right page. A description of the actual controls is better evidence than a generic statement that the browser is connected. Confirmation: establishes the correct tab. Observation: distinguishes seeing the page from reading its source files.

ON SCREEN
Run the browser connection check and keep Northstar visible.

EXACT PROMPT
Use the browser connection to describe the open ClientDesk page. Name the client, the latest meeting, and the primary action you can see. Do not click or change anything yet.

WHY THIS PROMPT
Confirmation: establishes the correct tab.
Observation: distinguishes seeing the page from reading its source files.

CHECK BEFORE CONTINUING
Claude correctly identifies Northstar and Review task.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The browser review request

## 87. The browser review request

SLIDE 87 | Build it for real | 1:49:30–1:52:30 (3 min)

SAY
The request combines task completion and visual inspection. Looking at source code is not the same as looking at the screen. Ask for a specific problem, an observed consequence, and a repeat of the same journey after the fix.

ON SCREEN
Run the request and record the actual journey. Show a passing result or the observed defect and its recheck.

EXACT PROMPT
Open Northstar in the running ClientDesk app. Set the browser’s content area to 390 pixels wide, roughly a phone screen. Find the latest meeting and reach Review using the keyboard. Record what happens. If a control is clipped, explain the cause, fix it and repeat the same journey. Otherwise, document the passing result.

CHECK BEFORE CONTINUING
Evidence: the tested width, the action and its result. For a fix, compare before and after.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A defect report you can act on

## 88. A defect report you can act on

SLIDE 88 | Build it for real | 1:52:30–1:53:30 (1 min)

SAY
A useful defect report tells me what the user could not do. We are not asking Claude to make an arbitrary visual improvement. We are giving it a repeatable problem and a visible finish line. Reproduction: names the condition and blocked action. Comparison: holds the width and journey constant.

ON SCREEN
Use the working navy app at /?view=client&client=northstar. Report an observed problem; there is no hidden cramped-mode parameter.

EXACT PROMPT
At 390 pixels wide, inspect the Northstar page and reach Review with the keyboard. If an action is blocked, capture it, explain the cause, fix it and repeat the same path. If it works, record the passing evidence instead of inventing a defect.

WHY THIS PROMPT
Reproduction: names the condition and blocked action.
Comparison: holds the width and journey constant.

CHECK BEFORE CONTINUING
A real defect has a before/after comparison; a passing journey has a recorded result.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Loading, missing data, and failed saves

## 89. Loading, missing data, and failed saves

SLIDE 89 | Build it for real | 1:53:30–1:54 (0.5 min)

SAY
A trustworthy interface distinguishes no data from a failed request. It preserves the user’s work and makes recovery visible. These states belong in the specification and the browser review, not in an optional polish pass.

ON SCREEN
Trigger two states with the fixture kit. Ask whether the message suggests the right next action.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Test the journey on a phone-sized screen

## 90. Test the journey on a phone-sized screen

SLIDE 90 | Build it for real | 1:54–2:00 (6 min)

SAY
Use the actual navy app. There is no forced broken-layout switch. Learners record what happens and report a real blocked action if one exists. A successful journey is valid evidence; do not manufacture a problem.

ON SCREEN
Use 00-course-map/labs/03-browser.md. Start a six-minute timer. Require the same viewport for before and after.

CHECK BEFORE CONTINUING
A reproducible defect report or a verified passing journey

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Chrome and computer use

## 91. Chrome and computer use

SLIDE 91 | Build it for real | 2:00–2:01:30 (1.5 min)

SAY
Browser integration handles the CRM. Desktop computer use covers the native app that receives its output. The two are different capabilities. Use the precise browser or CLI interface when it exists, and screen control for the remaining GUI-only step.

ON SCREEN
Introduce the native preview demonstration. Keep the desktop clean and use fictional exported data.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Computer use setup

## 92. Computer use setup

SLIDE 92 | Build it for real | 2:01:30–2:02:30 (1 min)

SAY
These are the current CLI prerequisites. Desktop also has a settings route and supports a different platform set. Do not present screen access as automatic. It is off by default, and the user approves the app. Use a manual demonstration on unsupported setups; no recorded fallback is bundled.

ON SCREEN
Show the setup menu without changing audience permissions. Recheck availability before the live course.

EXACT PROMPT
Help me enable computer use in this Claude Code session. Check whether my device and account support it. Explain the permissions I need to grant, then wait while I enable access to the document viewer.

CHECK BEFORE CONTINUING
Requires: an eligible macOS setup and interactive Claude Code session. Check current requirements before class.

IF THE DEMO STALLS
Demonstrate the document review manually if the delivery setup does not support native computer use. Label it as a manual review.

TRANSITION
The native document review prompt

## 93. The native document review prompt

SLIDE 93 | Build it for real | 2:02:30–2:03:30 (1 min)

SAY
Computer use matters here because the deliverable is a document, not just text in a conversation. I want Claude to inspect what the recipient will actually open. Surface: tests the file in the app people will use. Specificity: gives the review observable criteria.

ON SCREEN
Export the brief first, then select its real local file in the viewer.

EXACT PROMPT
Open the exported Northstar brief in the approved document viewer. Check that every section is readable, sources stay beside facts, and proposed actions are clearly labeled. Capture any clipped text and identify its section. Do not send or upload the document.

WHY THIS PROMPT
Surface: tests the file in the app people will use.
Specificity: gives the review observable criteria.

CHECK BEFORE CONTINUING
A screenshot and section-level findings support the review.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Export the brief, then inspect it

## 94. Export the brief, then inspect it

SLIDE 94 | Build it for real | 2:03:30–2:04 (0.5 min)

SAY
This is the GUI-only part of our workflow. We exported a client brief and now inspect it in a native viewer. The result may reveal formatting that the web app did not show. This is a small, bounded use of computer use.

ON SCREEN
Use a fictional export in Preview or the prepared native viewer. Point out the per-app approval and how to stop screen control.

EXACT PROMPT
Open the exported client brief in the native viewer.
Check that the client, source, owner, and due date
are readable. Screenshot any clipping.
Do not share, email, or upload the file.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A task is reviewed before it is saved

## 95. A task is reviewed before it is saved

SLIDE 95 | Build it for real | 2:04–2:06 (2 min)

SAY
A suggested task is a proposal. The app shows the exact task before saving it. After saving, read it back from storage. In the hosted target, the authenticated user and database policies enforce access. Email remains outside the scope.

ON SCREEN
Review the Northstar task in the app, confirm it once, and refresh to verify persistence.

CHECK BEFORE CONTINUING
Review checklist: the supporting meeting, Alex as owner, and a proposed date before the next call.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Recovery is part of the build

## 96. Recovery is part of the build

SLIDE 96 | Build it for real | 2:06–2:07 (1 min)

SAY
Do not infer success from a spinner disappearing. Keep a stable operation identifier and make retries safe. Scope the first live write to one task record; multi-service writes need a more detailed recovery design.

ON SCREEN
Run the duplicate task case in the reference kit. Verify there is still one task.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Evidence that the build works

## 97. Evidence that the build works

SLIDE 97 | Build it for real | 2:07–2:08:30 (1.5 min)

SAY
Different checks answer different questions. A unit test can prove duplicate handling, but it cannot prove OAuth is configured. The browser test can prove the action is visible, but it cannot establish row-level access. Keep the evidence honest.

ON SCREEN
Show the passing local checks and mark which live checks still need rehearsal.

CHECK BEFORE CONTINUING
Run the documented checks. A passing fictional import does not verify a live provider account.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Settings that stay outside the source

## 98. Settings that stay outside the source

SLIDE 98 | Build it for real | 2:08:30–2:09:30 (1 min)

SAY
Environment variables let the same code run with different service addresses and credentials. .env.example lists names without real secrets. Copy it to .env.local for local use. On Vercel use the project environment settings. Never put private values in a slide, browser code or a Git commit.

ON SCREEN
Open .env.example and the hosting settings with values hidden. Identify the database URL and anonymous key fields.

CHECK BEFORE CONTINUING
Learners can distinguish a variable name from its private value.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Connect the app to Vercel

## 99. Connect the app to Vercel

SLIDE 99 | Build it for real | 2:09:30–2:10:30 (1 min)

SAY
This code expects SUPABASE_ANON_KEY; it does not need a service-role key that bypasses database access rules. Scope the variables to the environment you will test. Preview and production have different URLs and can have different settings. Record the actual chosen URL rather than using the instructor’s project.

ON SCREEN
Use Vercel Add New Project, choose your repository and set the root directory. Obtain the URL and legacy anon key from your Supabase project settings.

EXACT PROMPT
Help me import my reviewed GitHub repository into Vercel. Set the root directory to 03-build/clientdesk and Node to 24. Add my SUPABASE_URL and SUPABASE_ANON_KEY in server settings for the deployment environment. Show the destination and build settings before deploying.

WHY THIS PROMPT
Root: deploys the app folder, not the whole kit.
Configuration: connects the prepared database.

CHECK BEFORE CONTINUING
The deployment builds and the hosted app reports Supabase storage.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Run the checks before deployment

## 100. Run the checks before deployment

SLIDE 100 | Build it for real | 2:10:30–2:11:30 (1 min)

SAY
Tests are repeatable questions we ask the app. The HTTP check sends actual requests to the running local server. A passing test suite still needs a browser review. New hosting settings require another check at the deployed URL.

ON SCREEN
Keep the app server in one terminal and run checks in another. Open 04-verification for the expected checks and receipts.

EXACT PROMPT
Run npm test, npm run typecheck and npm run build in the app folder. With the local app running, run npm run test:http. Explain failures, fix their cause, and repeat the affected checks before deploying.

WHY THIS PROMPT
Layers: checks data, types, build and real requests.
Evidence: distinguishes passing code from a passing screen.

CHECK BEFORE CONTINUING
All four checks pass; the browser journey also works.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
A hosted preview of the CRM

## 101. A hosted preview of the CRM

SLIDE 101 | Build it for real | 2:11:30–2:17:30 (6 min)

SAY
A preview deployment gives us a real URL for testing. Configure server-side secrets through the host, verify environment selection, and test sign-in before exposing real client data. A preview URL is not automatically private. Keep a known working commit for rollback.

ON SCREEN
Demonstrate only in the prepared hosting project. Record the preview URL and the commit that produced it. Use localhost if setup is not ready.

EXACT PROMPT
Prepare a hosted preview of the reviewed CRM. Run the checks, inspect the changed files, and show me the hosting project and visibility settings. After I approve that destination, deploy the preview and record its URL and code version.

CHECK BEFORE CONTINUING
Your own Vercel project + your Supabase database. Follow 05-deployment/SETUP.md.

IF THE DEMO STALLS
If the deployment is still pending at five minutes, open the existing reference URL and show its recorded version. Label the pending deployment clearly.

TRANSITION
Check the hosted result

## 102. Check the hosted result

SLIDE 102 | Build it for real | 2:17:30–2:20:30 (3 min)

SAY
Deployment moves the app to another environment. That can introduce different settings and failures. We repeat the important journey because the local result does not automatically prove the hosted result. Outcome: verifies the destination, not only the command. Version: makes the result reproducible. The screenshot is the actual hosted reference. Practice dates vary; repeat the checks at your own deployed URL.

ON SCREEN
Open the actual URL from the approved deployment.

EXACT PROMPT
Open the new preview URL and repeat the agreed client journey with fictional data. Confirm the intended access settings and code version. Report failed or untested checks separately. Do not treat a successful deployment message as proof that the app works.

WHY THIS PROMPT
Outcome: verifies the destination, not only the command.
Version: makes the result reproducible.

CHECK BEFORE CONTINUING
The hosted journey works and its version and access settings are recorded.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Ask Claude about the client

## 103. Ask Claude about the client

SLIDE 103 | Build it for real | 2:20:30–2:24:30 (4 min)

SAY
Here is the payoff: I can ask about one client and get a short answer tied to the meeting. I check the source instead of treating the answer as authority. The reply distinguishes the request from the decisions still to make. Now let us look at the small command behind that interaction.

ON SCREEN
Open Ask Claude on localhost, select Northstar and send this one question.

EXACT PROMPT
What did Maya request? Cite the meeting source ID. What did the meeting leave undecided? Keep it to three short bullets.

FOLLOW-UP PROMPT
Which source supports the checklist request? Cite the original source ID.

CHECK BEFORE CONTINUING
The reply cites demo-transcript-001, preserves the unknowns, and leaves the task count unchanged.

IF THE DEMO STALLS
After 90 seconds, use 04-verification/current-chat.txt as the recorded reply. Say that it is a prior result, then compare it with the same transcript.

TRANSITION
Headless: Claude without its chat screen

## 104. Headless: Claude without its chat screen

SLIDE 104 | Build it for real | 2:24:30–2:25 (0.5 min)

SAY
Headless means running without the interactive user interface. The app can still have its own chat panel. In our case the web app starts Claude Code with -p, gives it one request and receives its answer. Claude is still contacting the online Claude service. Headless does not mean offline, free or automatically safe. Our worker controls tools, context and timeouts separately.

ON SCREEN
Show a regular terminal beside ClientDesk. Explain that the following command runs in the terminal, outside an existing Claude conversation.

CHECK BEFORE CONTINUING
Learners can explain the difference between an interactive conversation and one programmatic request.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The small command behind the chat

## 105. The small command behind the chat

SLIDE 105 | Build it for real | 2:25–2:28 (3 min)

SAY
The new idea is only dash p, the short form of print. We send a prompt, receive the answer and return to the terminal. This minimal command explains the interface. For the live run, use the prepared run-first.sh file: it also chooses the model and disables tools. Those settings control behavior; they are separate from print mode.

ON SCREEN
Open 00-course-map/headless-example/run-first.sh. Run the prepared script in the terminal.

EXACT PROMPT
Ask for one small result:

“Explain a CRM in one sentence.”

Run the command in your terminal. Claude prints the answer and returns control to you.

EXACT TERMINAL COMMAND
claude -p "Explain a CRM in one sentence."

CHECK BEFORE CONTINUING
An answer appears and the process exits.

IF THE DEMO STALLS
Show the recorded first-command response in 04-verification/headless-first-command.json.

TRANSITION
Give the request a source file

## 106. Give the request a source file

SLIDE 106 | Build it for real | 2:28–2:31 (3 min)

SAY
The system-prompt option tells Claude how to handle the evidence in the input file. The two arrows here are terminal file operators. The less-than sign supplies the contents of our prepared source file as input. The greater-than sign puts the answer in a draft file. This is useful for a meeting brief, a reviewed summary, or another repeatable document task. It overwrites the named output file on a repeat run, so this dedicated example uses a disposable draft. The file contains a checklist request, but no agreed owner or due date. A good answer preserves that distinction. The shell writes the output; Claude does not need a file-writing tool. Open the file and read it before reusing it.

ON SCREEN
Run 00-course-map/headless-example/run-file.sh from its folder. Read the saved draft.

EXACT PROMPT
Use only the supplied evidence. List facts and unknowns. Cite source IDs. Do not ask what to do.

EXACT TERMINAL COMMAND
claude --safe-mode -p --tools "" \
  --model sonnet --effort low \
  --system-prompt "Use only the supplied evidence.
List facts and unknowns. Cite source IDs.
Do not ask what to do." \
  < northstar-context.txt > northstar-draft.txt

CHECK BEFORE CONTINUING
The draft cites demo-transcript-001 and says the owner and due date were not agreed.

IF THE DEMO STALLS
Use VERIFIED-EXAMPLE.md as a recorded response, not a new run.

TRANSITION
The chat behind ClientDesk

## 107. The chat behind ClientDesk

SLIDE 107 | Build it for real | 2:31–2:31:30 (0.5 min)

SAY
Our interface is the front door. The local server reads the visitor’s selected client records and packages them with the question. It starts Claude Code, sends that context, checks the returned result, and displays the answer. The app supplies the recent conversation again on each turn. Print mode is not secretly remembering the whole CRM or the earlier chat. In this implementation, each client has a separate conversation in page memory and reloading clears it. The bridge uses JSON output so it can detect a result or an error before showing text.

ON SCREEN
Show Ask Claude in the local app. Then point to app/api/chat/route.ts, lib/chat.ts, and lib/claude-local.ts in the real build without reading the code line by line.

CHECK BEFORE CONTINUING
The visible client matches the context selector and the reply is a draft, not a saved task.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Ask Claude to build the bridge

## 108. Ask Claude to build the bridge

SLIDE 108 | Build it for real | 2:31:30–2:32:30 (1 min)

SAY
This is the implementation request I would give Claude after reviewing the plan. It describes the job in plain English and makes the important decisions explicit. The model should not be able to wander through the project or save a suggested follow-up. We ask for cancellation and failure behavior because real requests can be slow or fail. The source files in our walkthrough are the completed example of this request, including result validation and tests. We are explaining an implementation that exists, not pretending we built the entire bridge in a one-minute live typing exercise. This is the local milestone. The following Railway steps implement the hosted version.

ON SCREEN
Show the exact request, then the completed local bridge files and tests/chat.test.ts. Use the prepared implementation during this short demonstration.

EXACT PROMPT
First add a local Ask Claude panel for the selected client. Use the signed-in Claude Code CLI in print mode. Send only that client’s evidence and recent chat. Return a sourced answer with no tools or writes. Include Stop, errors and a timeout. Enable it only on localhost.

WHY THIS PROMPT
Context: limits the request to one client.
Behavior: names the result and the failure states.
Boundary: keeps the subscription bridge local.

CHECK BEFORE CONTINUING
One client’s evidence goes in; a sourced answer or a useful error comes back.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Headless does not mean read-only

## 109. Headless does not mean read-only

SLIDE 109 | Build it for real | 2:32:30–2:33 (0.5 min)

SAY
This distinction is essential. Print mode can power an agent that takes actions, but we have chosen a narrower job. Our server starts it in a temporary empty folder with safe mode, no built-in tools, an empty strict MCP configuration, and no session persistence. The server also checks the local origin and current visitor’s workspace. These are implementation choices, not promises made by dash p. The app sends bounded evidence and recent messages each time. The full invocation is documented in LOCAL-CLAUDE-CHAT.md; learners do not need to memorize every flag.

ON SCREEN
Show the guardrails section of LOCAL-CLAUDE-CHAT.md and the command argument list in lib/claude-local.ts. Point out --tools "" and --output-format json.

CHECK BEFORE CONTINUING
Learners can name which part prevents writes: the configured tool boundary and app flow, not -p.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Included usage still counts

## 110. Included usage still counts

SLIDE 110 | Build it for real | 2:33–2:33:30 (0.5 min)

SAY
Our implementation uses a subscription login and excludes API-key fallback. Requests still consume the connected account’s allowance. Paid extra usage settings may affect charges; hosting has its own costs. Inspect the current account settings privately before class. Headless describes how the program runs, not how it is billed.

ON SCREEN
Explain the distinction using this slide. Before class, privately inspect login and usage; do not display credentials or account billing details to learners.

CHECK BEFORE CONTINUING
The class understands “uses my plan allowance” rather than “no tokens or possible charges.”

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A worker is a program with a job

## 111. A worker is a program with a job

SLIDE 111 | Build it for real | 2:33:30–2:34:30 (1 min)

SAY
A worker is a small program that handles a request behind the scenes. Here its job is to receive a chat question, give Claude the selected client’s records and return an answer. Railway supplies the online computer where this helper program runs. Claude Code is a program installed on that computer, and it contacts Claude’s online service. Follow the arrows from left to right, then follow the answer back. The Vercel app gets the client records from Supabase before sending them. The worker does not search the whole database. The app can stay available when my laptop is closed because these programs run on hosted computers.

ON SCREEN
Trace “What did Maya request?” across the diagram. Point to the helper program and distinguish it from the company hosting its computer.

CHECK BEFORE CONTINUING
Learners can explain the worker’s job and say where the answer appears.

IF THE DEMO STALLS
Open the hosting guide and trace the same example on its diagram.

TRANSITION
The same chat, on two computers

## 112. The same chat, on two computers

SLIDE 112 | Build it for real | 2:34:30–2:35 (0.5 min)

SAY
The hosted app cannot start a program on your laptop. Railway provides a separate server where our Claude worker runs. The visitor still opens the Vercel app. We now configure that second deployment and test the complete path.

ON SCREEN
Open the live reference at clientdesk-course.vercel.app and identify the Ask Claude panel. Then return to your own deployment setup.

CHECK BEFORE CONTINUING
Learners can distinguish the app they open from the helper that runs Claude.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
What the chat knows about a client

## 113. What the chat knows about a client

SLIDE 113 | Build it for real | 2:35–2:36 (1 min)

SAY
The app loads the current authenticated workspace before each turn. It selects this client and sends a bounded packet. Meeting summaries and transcripts are capped at 3,000 characters each; the last six conversation messages provide recent context. Claude is not directly browsing the database. Ask it to acknowledge missing or shortened information. A saved task deadline is not proof the meeting agreed that deadline.

ON SCREEN
Open lib/chat.ts and point to the selected-client context builder. Compare one response with the original meeting.

CHECK BEFORE CONTINUING
Learners can explain where an answer’s evidence comes from.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
The hosting words, in everyday language

## 114. The hosting words, in everyday language

SLIDE 114 | Build it for real | 2:36–2:37 (1 min)

SAY
Think of preparing another computer to run our helper. The Dockerfile is the recipe and the Docker image is the resulting package. Pinning a version keeps that recipe consistent. A persistent volume is the saved folder we attach separately so a deployment does not erase the Claude login. In Railway the folder is called /data. We ask Claude to prepare these pieces using the supplied guide. You do not have to write the packaging instructions yourself.

ON SCREEN
Show the Dockerfile and Railway’s volume setting with private values hidden. Point to the exact version and the /data folder.

CHECK BEFORE CONTINUING
Learners can explain why the helper needs both a software package and a saved folder.

IF THE DEMO STALLS
Open the hosting guide and trace the same example on its diagram.

TRANSITION
The program that handles chat

## 115. The program that handles chat

SLIDE 115 | Build it for real | 2:37–2:38 (1 min)

SAY
This prompt describes behavior we can observe. The guide supplies the exact package, version and settings. Approved means the app supplies the private service credential and the visitor supplies the course code. A checked answer means our program confirms Claude finished successfully and returned a usable result. It does not guarantee every fact is correct: we still compare the answer with its meeting source. Ask Claude to run the supplied tests and explain their results in ordinary language.

ON SCREEN
Open the worker Dockerfile, src/claude.ts, src/server.ts and src/guard.ts. Compare with 05-deployment/HOSTED-CLAUDE-CHAT.md.

EXACT PROMPT
Create the chat helper in 03-build/clientdesk-chat using the hosted chat guide. Give it only the selected client’s records and question. Let approved requests reach Claude and return a checked answer. Prevent it from changing files or saving tasks. Add a Stop button, a time limit and usage limits.

WHY THIS PROMPT
Clear job: answers one client question.
Boundaries: controls access and actions.

CHECK BEFORE CONTINUING
A question returns an answer. Invalid requests fail. Stop cancels the work.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
A home for the chat helper on Railway

## 116. A home for the chat helper on Railway

SLIDE 116 | Build it for real | 2:38–2:39 (1 min)

SAY
We are putting our helper on an online computer. In Railway create a service from the chat folder and use the supplied Dockerfile. Attach a persistent volume at /data. Generate the service’s web address. The guide names the private settings exactly: CHAT_SERVICE_TOKEN for app-to-helper access and CHAT_ACCESS_CODE for learner access. Keep their values different. Railway’s running status only proves the program started. We will test an actual Claude answer after signing in.

ON SCREEN
In Railway create a project and service from your repository, select the worker root, attach the volume and set the variables. Record your own service URL.

EXACT PROMPT
Help me run 03-build/clientdesk-chat on Railway using the hosted chat guide. Keep its Claude login and usage counts in a saved folder that survives updates. Give the helper a web address. Create separate private values for the app to connect and for learners to access chat.

WHY THIS PROMPT
Saved folder: keeps the login after an update.
Separate access: the app and learners have different codes.

CHECK BEFORE CONTINUING
The helper is running, its web address is recorded, and the saved folder is attached.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Claude needs a login on its new computer

## 117. Claude needs a login on its new computer

SLIDE 117 | Build it for real | 2:39–2:40 (1 min)

SAY
Signing in on my laptop does not sign in another computer. Ask Claude to install and connect the Railway command-line tool to this project. The supplied command opens the login helper on the Railway computer. Complete its browser authorization and return the confirmation code to its waiting terminal. Keep this authorization step private. If access expires later, repeat the login helper. A running program alone is not proof of a working Claude account.

ON SCREEN
Ask Claude to install the Railway CLI, sign in and link the worker folder to the intended service. Verify with railway status. Then run railway ssh node scripts/login.mjs and complete its browser authorization.

EXACT PROMPT
Help me sign in to the intended Claude account on Railway using the supplied login helper. Keep the login in the saved /data folder. Ask a sample question and check the answer. Deploy the helper again, then repeat the question to confirm it still works.

WHY THIS PROMPT
Right computer: signs in where Claude runs.
Repeat check: confirms an update keeps access.

CHECK BEFORE CONTINUING
A real answer works before and after deploying the helper again.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
An address and two different kinds of access

## 118. An address and two different kinds of access

SLIDE 118 | Build it for real | 2:40–2:41 (1 min)

SAY
Vercel needs to know where the helper lives and how to identify itself to it. The service token is a private machine-to-machine credential shared by Vercel and Railway. Learners do not type that value. They type a separate course access code into ClientDesk. The app passes it along for the helper to check. Separately, Claude’s own login authorizes the AI request. We completed that login on the previous slide. None of these values belongs in the public repository.

ON SCREEN
Point from the learner to ClientDesk, then from Vercel to Railway. Name the code used at each step, without showing real values.

CHECK BEFORE CONTINUING
Learners know which code they enter and which credential belongs only in server settings.

IF THE DEMO STALLS
Open the hosting guide and trace the same example on its diagram.

TRANSITION
The three settings Vercel needs

## 119. The three settings Vercel needs

SLIDE 119 | Build it for real | 2:41–2:42 (1 min)

SAY
Open your Vercel project, then Settings and Environment Variables. A variable has a name on the left and a value you supply on the right. Copy the exact names from the guide. First give Vercel the helper’s Railway web address. Next give it the same private service credential saved as CHAT_SERVICE_TOKEN in Railway. Finally supply the base address of your own Vercel app, with no page path, query or trailing slash. That base address is called the origin. It includes https and, when present, a port. Use the settings for the deployment you are testing, save them, then redeploy so the running app receives them. Keep the learner’s course code separate.

ON SCREEN
Use Vercel project Settings, Environment Variables. Enter the three documented names and your own values privately, save and redeploy. Open your app URL and ask a sample question.

CHECK BEFORE CONTINUING
The learner enters the course code and receives a sourced answer at the Vercel app URL.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Prove the full hosted conversation

## 120. Prove the full hosted conversation

SLIDE 120 | Build it for real | 2:42–2:43 (1 min)

SAY
This is the acceptance test for the whole system. A successful deploy is not the same as a useful app. Inspect the answer’s facts, source and uncertainty. Confirm a task suggestion is not silently saved. Save records live in Supabase; the conversation is held in page memory and resets when the page is reloaded.

ON SCREEN
Open your deployed app in a fresh browser workspace. Use fictional sample data. Enter the private course code only in the chat panel.

EXACT PROMPT
At my Vercel URL, ask what Maya requested and require the meeting source ID. Switch to Atlas and check the missing-meeting response. Test a wrong course code, Stop, a retry and phone width. Save a reviewed task separately and reload it. Record each result.

WHY THIS PROMPT
End to end: tests the deployed services together.
Contrast: checks evidence and missing evidence.

CHECK BEFORE CONTINUING
Northstar cites demo-transcript-001; Atlas has no invented meeting; task save remains separate.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
When chat fails, check the matching step

## 121. When chat fails, check the matching step

SLIDE 121 | Build it for real | 2:43–2:44 (1 min)

SAY
Use the message to identify the step that failed. A wrong course code, an unavailable helper and an expired Claude login are different problems. Ask Claude to inspect the relevant settings and diagnostic messages without displaying secrets or client records. Fix that step and retry the same question. The hosting guide provides the exact setting names.

ON SCREEN
Identify the symptom and open only the relevant configuration or log. Retest the same failed request after the correction.

CHECK BEFORE CONTINUING
Learners can choose a likely failing component and a concrete next check.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Build Q&A + reset

## 122. Build Q&A + reset

SLIDE 122 | Build it for real | 2:44–2:47:30 (3.5 min)

SAY
The build has a useful journey, a connection boundary, and an explicit test record. Now we isolate the recurring work and turn it into a skill. That skill should help another person perform the task without inheriting our whole conversation.

ON SCREEN
Take one build question. Keep the app and the project open for the skills section.

CHECK BEFORE CONTINUING
Next: package the method someone else will repeat

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A skill anyone can run

## 123. A skill anyone can run

SLIDE 123 | Create, iterate, and distribute skills | 2:47:30–2:48:30 (1 min)

SAY
The app is the product. The skill is the method for recurring work around it. Our example prepares a client brief from known records and proposes a follow-up for review. It should explain itself in a fresh session.

ON SCREEN
Open .claude/skills/client-brief/SKILL.md.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Which work deserves a skill?

## 124. Which work deserves a skill?

SLIDE 124 | Create, iterate, and distribute skills | 2:48:30–2:49:30 (1 min)

SAY
A skill is useful when a method recurs. It should remove repeated explanation while retaining the choices that require judgment. A one-off prompt may be enough when there is no recurring method to maintain.

ON SCREEN
Ask what people repeated during the build. Choose preparing a client brief as the shared example.

CHECK BEFORE CONTINUING
Northstar today. Cedar tomorrow.
The same brief structure.
A different client and meeting.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The app and the skill

## 125. The app and the skill

SLIDE 125 | Create, iterate, and distribute skills | 2:49:30–2:50 (0.5 min)

SAY
The skill does not become a second database or bypass the application contract. It reads through a defined interface, produces a clear result, and routes the proposed action to review. This separation lets us revise the method without rewriting the whole app.

ON SCREEN
Trace the existing client page to the command or MCP tool the skill will use.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The skill creation prompt

## 126. The skill creation prompt

SLIDE 126 | Create, iterate, and distribute skills | 2:50–2:51 (1 min)

SAY
I create the skill after we understand the method. Otherwise we risk packaging our guesses. The app manages the workflow; the skill gives Claude a repeatable way to prepare the brief. Repeatability: packages the method we already tested. Inputs: makes client and date explicit.

ON SCREEN
Open .claude/skills and paste the prompt into the project conversation.

EXACT PROMPT
Turn our client-brief method into a project skill named client-brief. It should accept a client ID and brief date, read evidence, separate facts from proposals, and create a consistent brief. Include a template, an example, and meaningful failure cases. Do not save tasks or send messages.

WHY THIS PROMPT
Repeatability: packages the method we already tested.
Inputs: makes client and date explicit.

CHECK BEFORE CONTINUING
The skill folder contains an entry point and the promised supporting files.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Name and argument hints

## 127. Name and argument hints

SLIDE 127 | Create, iterate, and distribute skills | 2:51–2:51:30 (0.5 min)

SAY
A clear name tells a teammate what will happen. The description says when to use it. The argument hint helps autocomplete. Keep the project folder and name aligned to avoid confusion about the command. We will invoke this teaching skill manually.

ON SCREEN
Type the command and show its hint. Point to the matching directory.

CHECK BEFORE CONTINUING
The skill folder is client-brief; invoke /client-brief.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Why the name and hints matter

## 128. Why the name and hints matter

SLIDE 128 | Create, iterate, and distribute skills | 2:51:30–2:52 (0.5 min)

SAY
A good name is a small piece of interface design. The hint should help someone begin, but it does not validate the input. The instructions still need to handle a missing client or impossible date. Discoverability: tests the words the next person will see. Control: checks when invocation is allowed.

ON SCREEN
Open the top of SKILL.md and then its slash-command hint.

EXACT PROMPT
Review the skill metadata as if you were a new teammate. Explain how to discover it, what arguments it expects, and whether it runs only when requested. Suggest clearer wording if any field makes you guess.

WHY THIS PROMPT
Discoverability: tests the words the next person will see.
Control: checks when invocation is allowed.

CHECK BEFORE CONTINUING
The name, description, argument hint, and invocation setting agree.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A hint does not validate an input

## 129. A hint does not validate an input

SLIDE 129 | Create, iterate, and distribute skills | 2:52–2:53:30 (1.5 min)

SAY
The hint is a user aid. The command parser or workflow must validate the actual input. “Northstar” and “northstar” need a deliberate mapping. A date-shaped string such as February 30 should not silently pass.

ON SCREEN
Run one missing client and one invalid date. Show the helpful response rather than allowing a guessed value.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The skill’s working instructions

## 130. The skill’s working instructions

SLIDE 130 | Create, iterate, and distribute skills | 2:53:30–2:54 (0.5 min)

SAY
The body defines the method and its limits. It should not contain every provider manual. Put larger examples and templates beside the file. The crucial behavior here is preserving uncertainty and evidence while proposing a useful next action.

ON SCREEN
Read the instructions aloud as if you had never seen the course. Remove any step that relies on hidden chat history.

EXACT PROMPT
Validate the client and brief date. Read the client and available meeting evidence. Identify missing information. Write the brief using templates/brief.md. Cite each meeting fact. Label suggestions as proposed. Do not save a task or send a message.

CHECK BEFORE CONTINUING
File: .claude/skills/client-brief/SKILL.md, below its metadata.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Run the skill with the demo date

## 131. Run the skill with the demo date

SLIDE 131 | Create, iterate, and distribute skills | 2:54–2:57 (3 min)

SAY
The slide gives a reusable request. Claude reads the prepared date and produces the exact command for today’s demonstration. We do not need to edit the deck each time the course runs. Reusable date: avoids a stale classroom example. Inspection: checks the output against the intended structure.

ON SCREEN
Start a fresh Claude Code conversation from Walkthrough Assets. Type /client-brief and inspect its argument hint.

EXACT PROMPT
Open the prepared demo context and read its date. Type /client-brief with northstar and that date. Compare the cited meeting with the CLI evidence. Then try an unknown client and record the validation response.

WHY THIS PROMPT
Reusable date: avoids a stale classroom example.
Inspection: checks the output against the intended structure.

CHECK BEFORE CONTINUING
A known client returns a sourced brief; an unknown client asks for a correction.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A small skill package

## 132. A small skill package

SLIDE 132 | Create, iterate, and distribute skills | 2:57–2:58:30 (1.5 min)

SAY
The instruction file routes the work. The template defines the output. The example shows the quality bar. The test cases record situations that previously failed. Keep referenced files relative to the skill directory.

ON SCREEN
Open one supporting file only when it is relevant. Explain that compact entry instructions reduce unnecessary context.

CHECK BEFORE CONTINUING
Instructions
Output structure
A good example
Cases to rerun

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The brief a teammate receives

## 133. The brief a teammate receives

SLIDE 133 | Create, iterate, and distribute skills | 2:58:30–3:00:30 (2 min)

SAY
A useful brief separates facts from suggestions. If a due date was not agreed, the model should not present its own date as a client commitment. Put the proposed date in the suggestion and ask the reviewer to confirm it.

ON SCREEN
Show examples/northstar.md. Identify one sourced fact and one proposed action.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Read skill and write action

## 134. Read skill and write action

SLIDE 134 | Create, iterate, and distribute skills | 3:00:30–3:02 (1.5 min)

SAY
Our first skill has no automatic external write. The application handles the reviewed save. If a later team adds an apply skill, keep approval separate and validate the actual payload and authenticated identity in code. A skill instruction alone is not a control.

ON SCREEN
Demonstrate that invoking the skill leaves the task count unchanged.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Rules keep the method consistent

## 135. Rules keep the method consistent

SLIDE 135 | Create, iterate, and distribute skills | 3:02–3:03:30 (1.5 min)

SAY
Rules should capture requirements that apply beyond one command. Avoid copying a long rule into every skill. Keep the shared project contract short and use topic files when they make it easier to maintain.

ON SCREEN
Show a meeting with an embedded malicious instruction. Explain why the brief uses it only as source content.

CHECK BEFORE CONTINUING
These behaviors are preserved in the actual skill and interface rule.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A hook checks edited sample files

## 136. A hook checks edited sample files

SLIDE 136 | Create, iterate, and distribute skills | 3:03:30–3:04 (0.5 min)

SAY
This hook runs after a matching edit or write. The script reads the event and validates a fixture file if that file changed. It does not rewrite the file or make a network request. Review hook scripts before enabling them and merge configuration into existing settings.

ON SCREEN
Show settings.example.json and the script. Do not replace an attendee’s existing settings. Note that a post-edit check reports a problem after the edit.

CHECK BEFORE CONTINUING
.claude/settings.example.json · merge the hooks object after reviewing the script.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Add a hook with a clear purpose

## 137. Add a hook with a clear purpose

SLIDE 137 | Create, iterate, and distribute skills | 3:04–3:07 (3 min)

SAY
The hook is a small automatic check. It is not a promise that the entire project is correct. We make its trigger and its limits visible so the team knows what it does. Review: reads executable code before enabling it. Integration: preserves the project’s other settings.

ON SCREEN
Use the exercise copy. Run 00-course-map/test-hook.mjs before enabling the example.

EXACT PROMPT
Review 00-course-map/check-fixture.mjs and .claude/settings.example.json. Explain the checked files and limits. In an exercise copy, merge the hook into existing settings. Test one valid event and one invalid meeting without changing the reference data.

WHY THIS PROMPT
Review: reads executable code before enabling it.
Integration: preserves the project’s other settings.

CHECK BEFORE CONTINUING
The valid event passes and the invalid meeting is reported. The checker makes no network request.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A concrete quality loop

## 138. A concrete quality loop

SLIDE 138 | Create, iterate, and distribute skills | 3:07–3:08 (1 min)

SAY
These layers complement each other. A rule asks for evidence. A skill retrieves and cites it. A hook can verify a known format. A person decides whether the result is useful and whether an action should be saved.

ON SCREEN
Ask which layer should fix an invalid date, a missing source citation, and a confusing title.

CHECK BEFORE CONTINUING
For the checklist proposal, the person confirms the owner and due date before saving.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Build /client-brief

## 139. Build /client-brief

SLIDE 139 | Create, iterate, and distribute skills | 3:08–3:18 (10 min)

SAY
Use the starter file or create the folder yourself. Spend three minutes on metadata and inputs, four on the method and template, and three running the normal and invalid cases. The skill must not create a task as a side effect.

ON SCREEN
Use 00-course-map/labs/04-skill.md. At minute seven, ask everyone to run the command. Early finishers add a missing transcript case.

CHECK BEFORE CONTINUING
A manually invoked skill with a source-backed brief

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A skill review before sharing

## 140. A skill review before sharing

SLIDE 140 | Create, iterate, and distribute skills | 3:18–3:19 (1 min)

SAY
A skill that works for its author may rely on tools, paths, or context the teammate does not have. Review the package against this list. Keep claims tied to observed runs, and record any environment assumptions.

ON SCREEN
Review one skill from the lab. Open any referenced script before recommending that someone execute it.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A fresh session is the real test

## 141. A fresh session is the real test

SLIDE 141 | Create, iterate, and distribute skills | 3:19–3:19:30 (0.5 min)

SAY
A cold run removes the accidental support of the author’s chat. It exposes missing prerequisites, unclear inputs, and hidden judgments. We are testing the method’s portability, not the skill of the person receiving it.

ON SCREEN
Start a fresh session or ask a partner to take the written instructions.

CHECK BEFORE CONTINUING
Could a teammate run /client-brief
using only the README
and a fresh conversation?

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The fresh-session rehearsal

## 142. The fresh-session rehearsal

SLIDE 142 | Create, iterate, and distribute skills | 3:19:30–3:20:30 (1 min)

SAY
The author stays quiet for the first attempt. If I explain the missing step aloud, I hide the defect. The point is to improve the package until another person can follow it independently. Independence: removes hidden chat context. Feedback: turns guessing into a specific documentation defect.

ON SCREEN
Start a new Claude Code conversation in a separate working copy. Ask a teammate to follow the README.

EXACT PROMPT
Read this release’s README in a fresh conversation. Follow its setup and run the documented Northstar brief example. Record every point where you need information that is absent from the files. Do not use the author’s earlier conversation.

WHY THIS PROMPT
Independence: removes hidden chat context.
Feedback: turns guessing into a specific documentation defect.

CHECK BEFORE CONTINUING
The teammate finishes or produces a reproducible missing-information report.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Run it cold

## 143. Run it cold

SLIDE 143 | Create, iterate, and distribute skills | 3:20:30–3:28:30 (8 min)

SAY
The author stays quiet for the first attempt. The tester records the input, expected behavior, observed result, and consequence. Missing setup documentation is a defect even if the core instructions are excellent.

ON SCREEN
Use 00-course-map/labs/05-cold-run.md. Start an eight-minute timer. If working alone, clear the conversation and follow only the README.

CHECK BEFORE CONTINUING
One reproducible friction report

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Fix the layer that caused the failure

## 144. Fix the layer that caused the failure

SLIDE 144 | Create, iterate, and distribute skills | 3:28:30–3:29:30 (1 min)

SAY
Match the fix to the cause. If data conversion loses a field, repair that conversion. If someone cannot find the command, improve its name or README. If access is wrong, fix the enforced rule in the server or database and retest.

ON SCREEN
Classify the friction report before editing anything.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
One observed defect, one revision

## 145. One observed defect, one revision

SLIDE 145 | Create, iterate, and distribute skills | 3:29:30–3:30:30 (1 min)

SAY
This is a specific revision motivated by evidence. It changes how the result communicates uncertainty. Rerun the same case and one normal case to confirm that the fix does not erase useful information.

ON SCREEN
Edit the template and instruction. Show the changed lines and rerun the exact case.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Checks to repeat after each change

## 146. Checks to repeat after each change

SLIDE 146 | Create, iterate, and distribute skills | 3:30:30–3:31:30 (1 min)

SAY
Keep a small set of meaningful cases with the skill. Add cases when an actual failure teaches you something. The goal is confidence in the behavior that matters, not a large test count.

ON SCREEN
Save the new case in tests/cases.md and record the outcome.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Into your team’s hands

## 147. Into your team’s hands

SLIDE 147 | Create, iterate, and distribute skills | 3:31:30–3:32:30 (1 min)

SAY
Distribution adds new people, machines, and failure modes. Start with one teammate and a known version. The shared repository should make the setup, ownership, and supported behavior clear.

ON SCREEN
Open the repository’s release checklist.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
GitHub is the shared home

## 148. GitHub is the shared home

SLIDE 148 | Create, iterate, and distribute skills | 3:32:30–3:33 (0.5 min)

SAY
For this project, committing the skill beside the app is the simplest shared home. A teammate receives the same code, rules, templates, and skill. A plugin can be useful later when the same package needs to span many projects.

ON SCREEN
Show a pull request description with the changed behavior and the cases tested. Keep secret files out of the diff.

CHECK BEFORE CONTINUING
A reviewed release includes the app, plan, design, .claude instructions, tests and startup guide.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Prepare the release in plain English

## 149. Prepare the release in plain English

SLIDE 149 | Create, iterate, and distribute skills | 3:33–3:34 (1 min)

SAY
A release is more than uploading SKILL.md. It includes the method, the supporting files, and the instructions that remove guessing. We start with one teammate and use their first run to improve it. Completeness: includes the instructions around the skill. Review: ties sharing to a known, tested version.

ON SCREEN
Open RELEASE.md and review the file list before approving repository changes.

EXACT PROMPT
Prepare a reviewed release of the app and client-brief skill. Include setup, one example, permissions, known limitations, and the cases tested. Show the changed files and proposed version. After I approve them, create the versioned release and give me the teammate setup instructions.

WHY THIS PROMPT
Completeness: includes the instructions around the skill.
Review: ties sharing to a known, tested version.

CHECK BEFORE CONTINUING
The release points to one version and a setup another person can follow.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A teammate starts from a known version

## 150. A teammate starts from a known version

SLIDE 150 | Create, iterate, and distribute skills | 3:34–3:35 (1 min)

SAY
The released app should include a lockfile and documented prerequisites. The teaching kit uses built-in Node modules, so its README gives the simpler start command. For a real release, test the exact installation steps on a clean machine.

ON SCREEN
Use a prepared private demo repository. Replace the placeholder URL with its real address in the teaching copy; do not invent a public course repository.

EXACT PROMPT
Open the supplied Walkthrough Assets folder or clone the instructor’s reviewed repository. Read 00-course-map/START-HERE.md and follow its setup. Start Claude Code at the root and run /client-brief with Northstar and the prepared date.

CHECK BEFORE CONTINUING
Use the supplied folder today. A repository URL and real version are supplied only for a published team release.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Package it for a teammate

## 151. Package it for a teammate

SLIDE 151 | Create, iterate, and distribute skills | 3:35–3:41 (6 min)

SAY
A release is the method plus everything needed to use it. The README should show prerequisites, setup, the first command, expected output, and how to report a problem. A local tag is enough for the exercise if the remote is not ready.

ON SCREEN
Use 00-course-map/labs/06-release.md. Require a setup path that works without asking the author.

CHECK BEFORE CONTINUING
A local handoff another person can follow

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Keep the library useful

## 152. Keep the library useful

SLIDE 152 | Create, iterate, and distribute skills | 3:41–3:42 (1 min)

SAY
Skills decay when tools, commands, or team workflows change. Review the library based on actual usage and failures. Retire or archive obsolete methods visibly instead of leaving multiple conflicting versions installed.

ON SCREEN
Name an owner and next review date for the course skill. Explain when project scope should become a shared plugin.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The workflow ends with a useful brief

## 153. The workflow ends with a useful brief

SLIDE 153 | Create, iterate, and distribute skills | 3:42–3:44 (2 min)

SAY
We can now connect the whole story. The specification defines the job. The app brings the evidence together. Browser testing improves the journey. The skill produces a consistent brief. A reviewer saves the follow-up, and a teammate can reproduce the method.

ON SCREEN
Run the end-to-end fixture path once. Name the corresponding plan, source, screen, skill, and saved task.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
What “ready to share” means

## 154. What “ready to share” means

SLIDE 154 | Create, iterate, and distribute skills | 3:44–3:45 (1 min)

SAY
Do not equate publishing a repository with successful adoption. Watch one person use it for a real task, collect the friction, and improve the method before expanding access. For real data, complete the live and authorization checks first.

ON SCREEN
Ask learners to name their pilot teammate and the first task they will observe.

CHECK BEFORE CONTINUING
Start with one pilot teammate.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Skills Q&A + reset

## 155. Skills Q&A + reset

SLIDE 155 | Create, iterate, and distribute skills | 3:45–3:47 (2 min)

SAY
Take questions on naming, arguments, scope, review, and distribution. Use the CRM example to keep answers concrete. We finish with one useful weekend build.

ON SCREEN
Take one or two focused questions and protect the closing block.

CHECK BEFORE CONTINUING
Next: your weekend build

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
A useful tool starts with a useful job

## 156. A useful tool starts with a useful job

SLIDE 156 | Your weekend build | 3:47–3:48:30 (1.5 min)

SAY
A useful first version does not require a month-long runway. Keep the first job small, prepare the accounts, and use the checkpoints from today. Your weekend goal is one usable loop with enough evidence to show another person.

ON SCREEN
Ask learners to write the job, the first user, and the smallest useful result.

CHECK BEFORE CONTINUING
Choose one recurring task
you can improve this weekend.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
Your weekend build

## 157. Your weekend build

SLIDE 157 | Your weekend build | 3:48:30–3:51:30 (3 min)

SAY
This is a suggested pace for a small first version with accounts ready. Friday defines the job. Saturday gets one loop working and checks it. Sunday packages the repeatable method and lets another person try it. If an integration blocks progress, keep the sample-data path and record the missing check rather than calling it complete.

ON SCREEN
Choose the weekend and the person who will try the result. Circle the one integration that needs preparation.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
The complete build, with a check at each step

## 158. The complete build, with a check at each step

SLIDE 158 | Build it for real | 3:51:30–3:52:30 (1 min)

SAY
This is the whole route. The end-to-end guide links each step to its exact artifact and prompt. If you only want to run the finished reference, use the reference startup path. If you want to learn the construction process, use the separate rebuild path. The source code is included for exact reproduction; prose specifies behavior and design but does not guarantee an identical generated implementation.

ON SCREEN
Open 00-course-map/END-TO-END.md and show the stage-to-file map.

CHECK BEFORE CONTINUING
Every stage has an artifact and a result someone else can check.

IF THE DEMO STALLS
Open the named file in the completed reference. Identify the unfinished step in your rebuild and record it before continuing.

TRANSITION
Your ClientDesk course kit

## 159. Your ClientDesk course kit

SLIDE 159 | Your weekend build | 3:52:30–3:55 (2.5 min)

SAY
There is one current reference project. The course kit is a portable copy of Walkthrough Assets, with the same app, paths, skill and labs. The older simple app is archived, so learners do not choose between conflicting setup instructions.

ON SCREEN
Open Walkthrough Assets/00-course-map/START-HERE.md. All course paths resolve inside that folder.

CHECK BEFORE CONTINUING
Compare the visible result with the criteria on this slide before continuing.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
What will your team run next?

## 160. What will your team run next?

SLIDE 160 | Your weekend build | 3:55–3:57 (2 min)

SAY
Write the workflow, the person who owns it, and the date someone else will try it. That is a concrete next step you can act on after this course. Thank you for building along.

ON SCREEN
Invite two commitments in chat, thank the audience, and finish at 3:30.

CHECK BEFORE CONTINUING
One workflow. One owner. One review date.

IF THE DEMO STALLS
Use the corresponding file in the completed Walkthrough Assets reference. State which live step is unfinished and record it before moving on.

TRANSITION
End the formal session.

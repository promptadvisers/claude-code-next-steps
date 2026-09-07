# Run the finished app without improvising

Start at the live app or localhost. A new browser identity creates a fresh fictional workspace. Keep your teaching browser consistent: CLI and MCP use their own authorized practice session by default.

| Step | What you do on screen | What you explain | Visible result |
| --- | --- | --- | --- |
| 1 | Open the workspace | “We are helping a consultant remember what happened and decide what comes next.” | Three clients, next call, recent meetings |
| 2 | Open Northstar | “One client page brings together the people, conversations and follow-ups.” | Maya’s contact and latest meeting |
| 3 | Read the transcript | “A request for a checklist does not tell us who owns it or when it is due.” | Original wording and source ID |
| 4 | Prepare follow-up | “Claude can propose the next step. We still distinguish a proposal from an agreement.” | Editable title, owner and proposed date |
| 5 | Review follow-up | “This screen names the exact thing I am about to save.” | Client, action, owner, date and supporting meeting |
| 6 | Save, then reload | “The task must still exist after the page reloads.” | One persisted task |
| 7 | Complete, open Completed, then reopen | “The record follows the work beyond creation.” | Status and counts update |
| 8 | Open Client brief | “Before the next call, I need facts, existing work and the question still to resolve.” | A sourced pre-call brief |
| 9 | Export brief | “The same context can leave the app as a readable file.” | Markdown brief download |
| 10 | Find Cedar | “Missing notes are a normal state. The app should say what is missing.” | Transcript unavailable, import action |
| 11 | Search for Leila; open Atlas | “A new client deserves a useful next step, even before their first meeting.” | Empty client with an import action |
| 12 | Open Connections | “Provider identity, record mapping and source IDs are different parts of a connection.” | Explicit sample/live status and import options |
| 13 | Paste 01-planning/sample-data/meeting.json into Import record twice | “The same source should update one record, not make duplicates.” | One meeting with a stable source identity |
| 14 | Inspect Northstar at a phone-width browser | “Can a person still reach the review and save controls on a phone?” | Responsive page, readable dialog, reachable save |

Use EXACT-PROMPTS.md to rebuild each stage. Use WALKTHROUGH.md to connect the stage to its actual files. For the code-level example, show the corresponding tests only after demonstrating the visible behavior.

## Rehearsal boundaries

No email or calendar event is sent by this flow. No live Fireflies or Calendly account is configured. To teach an actual live read, use a dedicated teaching account and one selected record, then preserve that separate verification result. The project skill was discovered by Claude Code and direct /client-brief invocation returned a sourced brief. See 04-verification/course-skill-direct-invocation.json. Recheck interactive autocomplete and permissions in the delivery environment.

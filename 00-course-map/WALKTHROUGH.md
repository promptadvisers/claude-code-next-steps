# The instructor walkthrough

Use the actual project files, not a reconstructed story. The original planning commit is a4eb4e2. Later implementation commits and deployment receipts record completed work.

| Stage | What to show | What to explain | Artifact |
| --- | --- | --- | --- |
| Start with the job | Northstar’s current workflow | The problem is lost follow-up context, not a need for a huge CRM. | 01-planning/BRIEF.md |
| Make the plan testable | Scope and acceptance checks | A successful result is a reviewed task that remains after refresh. | 01-planning/SPEC.md |
| Name the decisions | Identity, storage, provider boundaries | Small architectural choices need explicit reasons. | 01-planning/DECISIONS.md |
| Specify the design | Type, palette, layout and state rules | Design guidance should describe visible outcomes. | 02-design/DESIGN.md and tokens.css |
| Save the checkpoint | Local Git history | Planning was committed before implementation. | git log --oneline |
| Build the first loop | Client → source meeting → proposal → exact review | Read the evidence before approving the next action. | 03-build/clientdesk/components/clientdesk.tsx |
| Inspect the result | Actual localhost app | Review the real page, including empty and unavailable states. | 04-verification/screenshots |
| Prove persistence | Save a follow-up; refresh | A toast is not proof of a durable save. | 04-verification/http-localhost.json |
| Connect one source | Connections import plus provider adapter | Keep source IDs and explicit client mapping. Reimport one source. | 03-build/clientdesk/lib/adapters.ts |
| Test the boundary | Two isolated practice identities | Hiding a button cannot protect a row. | 04-verification/database-rls.json |
| Review at phone width | Northstar at 390px | The same action must remain reachable. | 04-verification/screenshots/review-phone.png |
| Package the method | /client-brief and read-only MCP tools | A method needs a name, inputs, evidence rules and failure cases. | .claude/skills/client-brief and 03-build/clientdesk/scripts/mcp.mjs |
| Deploy the same build | Vercel URL and recorded commit | Repeat the user journey on the real hosted destination. | 05-deployment |

The provider adapters are implemented; real teaching-account calls remain a separately authorized rehearsal. This distinction is visible in the application and deployment notes.

## Optional extension: ask about the work

Open the local Ask Claude panel after demonstrating the finished CRM. The exact setup and instructor explanation are in `05-deployment/LOCAL-CLAUDE-CHAT.md`. This extension shows how a working app can supply context to a headless Claude process while retaining human review for changes. It uses the instructor’s local plan allowance; it is not enabled for public Vercel visitors.

## In the instructor deck: print mode

Slides 83–91 of the 129-slide Complete edition connect the completed CRM to `claude -p`. Use `headless-example/README.md` here for the exact terminal commands and source fixture. `VERIFIED-EXAMPLE.md` is a recorded result, not a live response. The app implementation remains in `03-build/clientdesk`; the local setup and deployment boundary are documented in `05-deployment/LOCAL-CLAUDE-CHAT.md`. All slide prompts and narration are in the 00-course-map/COURSE-PROMPTS.md and 00-course-map/INSTRUCTOR-SCRIPT.md.

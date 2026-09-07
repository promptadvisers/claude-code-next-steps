# ClientDesk course walkthrough

Read 01-planning/BRIEF.md, 01-planning/SPEC.md and 01-planning/DECISIONS.md before changing the product. Design guidance is in 02-design/DESIGN.md. App source is 03-build/clientdesk; run its npm scripts from there. `npm run dev` uses 127.0.0.1:4310, `npm test` checks domain/adapter behavior, `npm run build` checks the production build, and `npm run test:http` verifies real API persistence/isolation.

Keep the completed reference available and use a separate copy for exercises. Update BUILD-LOG.md when a milestone actually passes. Store sanitized verification evidence in 04-verification and hosting receipts in 05-deployment. Never commit .env files, auth sessions, .vercel metadata or .data contents.

ClientDesk is a fictional practice CRM. Actual provider account access must be explicitly scoped to a teaching account and record. Facts keep source IDs. Proposals require exact review before saving. Browser testing uses the internal browser, never full-screen PowerPoint or the user’s physical Chrome window.

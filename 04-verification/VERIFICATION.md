# Verification of the working build

## Passed

- 15 domain and adapter tests: real dates, explicit confirmation, client/meeting relationships, unavailable evidence, idempotent retry and conflicts, stable import identity, client validation, missing task, sourced brief, evergreen seed dates, calendar cancellation and provider-host validation.
- TypeScript typecheck and Vercel production build.
- 9 HTTP checks on localhost with Supabase and on the actual Vercel URL. The results include persistence, retries, concurrent writes, separate-session ownership and cross-origin rejection. See http-localhost.json and http-vercel.json.
- 6 direct Supabase policy checks, including forged owner insertion and unauthenticated access. See database-rls.json.
- MCP stdio initialization, discovery of three read-only tools and a Northstar brief with its source ID. See mcp.json. Actual CLI output is in cli-northstar-brief.md.
- Both generated sample imports validate and can be replayed without adding duplicate records. See sample-imports.json.
- Internal-browser desktop journey on Vercel: brief preview → proposal → exact review → save → reload → task still visible. Completion, Completed view and reopening also passed. Contact search for Leila opened Atlas and its empty state.
- Local and hosted browser at 390px: no horizontal document overflow; proposal and review remain usable; keyboard focus scrolls the save control into the viewport (the review content scrolls vertically). Escape closes the dialog. Arrow-right changes the selected client tab and moves keyboard focus.

## Problems found and fixed

1. Next’s internal URL host did not match the incoming 127.0.0.1 origin. The API now checks the incoming Host, and the cross-origin rejection still passes.
2. The CLI was compiled as CommonJS despite top-level await. Explicit ESM fixed the real invocation; the successful output is retained.
3. The Completed filter’s empty-state wording leaked into a client’s Open follow-ups section. Empty-state context is now passed explicitly. The exact Completed → search → Atlas route was repeated in the browser and shows “You’re all caught up.”

## What these results do not establish

Live Fireflies and Calendly reads were not performed. Named-account login, recovery and shared-team access are outside this release. Claude Code discovered the project skill, refused model-driven invocation as configured, and accepted direct /client-brief invocation in a fresh print-mode process. Interactive autocomplete still requires a delivery-environment check. See course-skill-direct-invocation.json. Browser checks are a targeted desktop/phone and keyboard review, not a full assistive-technology certification or load test.

## Visual evidence

Screenshots are under screenshots/. Files ending in -vercel show the hosted app. Local phone captures show the same layout; deployment receipts identify the actual uploaded source. Screenshots contain fictional course records only.

Final production deployment: dpl_FdGrZqC8V6TLNt4Uen2YFaCTnXjA, source fc10c1d. The nine HTTP checks were repeated successfully against the final alias. Hosted phone evidence and measured save-control bounds are recorded in browser.json.

## Local Claude chat extension

The suite now has 21 passing tests, including six chat checks. Actual headless inference produced a selected-client answer and a follow-up citing demo-transcript-001. The internal browser verified separate client conversations, stopped-request draft retention, and a 390px layout with the composer inside the viewport. See claude-chat.json and screenshots/claude-chat-*.png. The public hosted build disables this personal subscription feature. The chat does not independently verify account-level paid extra-usage settings.

## Navy palette review

The current app palette is the user-requested navy/blue direction. Desktop workspace, Claude chat and 390px workspace were inspected in the internal browser. The document remained 390px wide. Screenshots use the prefix navy-. Targeted text contrast checks are in navy-contrast.json; sampled pairs exceed 4.5:1. No new behavior tests were added for this color-only change.

## Complete course revision

The 21-test suite and localhost HTTP integration checks passed again during course alignment. The fictional Northstar meeting was imported repeatedly in the internal browser with one stable source record. The local chat returned a sourced answer; current-chat.txt preserves that reply. Four isolated hook cases passed: valid event, missing meeting source, invalid meeting date and unrelated edit. The required classroom route uses fictional imports; no new live provider verification is claimed.

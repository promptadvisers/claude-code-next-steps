# Claude chat through the local CLI

The local ClientDesk app now includes **Ask Claude**. It uses the Mac’s installed Claude Code CLI in print mode and the already signed-in Claude subscription. It is not a public proxy to the instructor’s account.

## Run it

1. Install Claude Code and sign in through `claude auth login` using your Claude plan.
2. In the app’s private `.env.local`, set `CLIENTDESK_LOCAL_CHAT=1`.
3. Run `npm run dev` from `03-build/clientdesk` and open http://127.0.0.1:4310.
4. Open Northstar, choose Ask Claude, then ask what was agreed or request a follow-up draft.

The chat reads only that visitor’s selected client records. It sends up to four recent meetings, ten calendar records and twenty tasks, plus the last six chat messages. Long text is excerpted. Each client has a separate conversation in the current page’s memory; page reload starts fresh. It does not persist chats to Supabase or Claude Code session files.

`.env.example` defaults off. Vercel always disables the feature, even if the opt-in variable is accidentally supplied there. Public visitors cannot use the Mac’s subscription through this route.

## Usage and billing

Verified on September 6, 2026: the installed CLI authenticated through a Claude Max subscription. Anthropic’s current support article says `claude -p` still draws from subscription usage limits; a previously announced separate credit was paused. This is **included allowance, not unlimited or token-free inference**. Account-level paid extra-usage settings can still affect billing. Those settings were not changed or independently verified by this app; keep paid extra usage disabled if zero overage is required.

The child process inherits a short environment allowlist, excluding API keys, alternate provider credentials, OAuth-token overrides and custom config paths. The bridge checks subscription authentication before inference and never falls back to an API key. It does not use `--bare`, which bypasses subscription login.

Sources:
- https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- https://support.claude.com/en/articles/12304248-manage-api-key-environment-variables-in-claude-code
- https://code.claude.com/docs/en/headless

## The actual path

Local browser → same-origin `/api/chat` → read the current authenticated workspace → select one client’s evidence → `claude -p` → validated result → chat panel.

The CLI runs from a temporary empty directory with safe mode, no tools, an empty strict MCP configuration, disabled skills and session persistence disabled. The system prompt comes from `lib/chat.ts`; input is passed through stdin, never shell interpolation. No filesystem or provider-write tools are available to the model. Suggestions must go through the app’s existing human review flow before saving.

Requests require the exact local origin, localhost port 4310, explicit local opt-in and no Vercel environment. Inputs and output size are bounded; only one Claude reply can run at a time. A reply has a 90-second process timeout. Stop/close aborts the request and terminates the subprocess. Errors retain the question for retry.

## Course demonstration

**Say:** “Our CRM already holds the context. We can give Claude that context without turning it into permission to act.”

**Ask Claude:** “What do we know, and what is still unclear?”

**Then ask:** “Which source supports the checklist request? Cite the original source ID.”

**Explain:** The bridge supplies the source records on every turn. Chat history gives continuity. A response is a draft, not a database write. The Max subscription is an authentication and usage choice for this local example, not a way to run a free shared hosted service.

Implementation: `components/claude-chat.tsx`, `app/api/chat/route.ts`, `lib/chat.ts`, `lib/claude-local.ts`. Tests: `tests/chat.test.ts`. The implementation supports both a single CLI JSON result and a JSON event array; the latter was discovered in the real installed CLI during verification.

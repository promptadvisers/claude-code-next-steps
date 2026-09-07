# One headless request, one reviewed draft

Use a terminal in this folder. Install Claude Code and sign in before class. Check the installed `claude --help` for `--safe-mode` and your plan allowance. This example was rehearsed with Claude Code 2.1.263. Subscription login uses your allowance; API authentication and paid extra usage can affect billing. Do not promise a free or unlimited run.

## First request

```sh
claude --safe-mode -p --tools "" \
  --model sonnet --effort low \
  "Explain a CRM in one sentence."
```

`-p` is short for `--print`: send a request, print the result, and exit. Safe mode disables customizations for this controlled example; the empty tools list disables built-in tools. Print mode alone does not make a request read-only.

## Use the prepared evidence

Open `northstar-context.txt` first. Then run:

```sh
claude --safe-mode -p --tools "" \
  --model sonnet --effort low \
  --system-prompt "Use only the supplied evidence.
List facts and unknowns. Cite source IDs.
Do not ask what to do." \
  < northstar-context.txt > northstar-draft.txt
```

The `--system-prompt` option specifies how Claude should handle the supplied evidence. The `<` operator supplies a file as input. The `>` operator writes the answer to a file and overwrites that file if it already exists. Keep this disposable draft in the example folder. Open the draft in your editor after the command finishes.

**Check:** The answer cites `demo-transcript-001`, identifies the checklist request, and says the owner and delivery date are unknown. Exact prose varies. Nothing is sent to a client or saved as a CRM task. If the command fails, inspect its terminal error; an empty draft is not a successful result.

## The app is the next step

ClientDesk calls print mode from its local server. It sends one client's evidence plus recent messages on every request, uses JSON output, validates errors, and displays the answer. The app's bridge adds isolated execution, strict empty MCP configuration, subscription authentication checks, cancellation and a timeout. See `../../05-deployment/LOCAL-CLAUDE-CHAT.md` and `../../03-build/clientdesk/lib/claude-local.ts` in the full Walkthrough Assets folder. This example alone is not a hosted chat service.

Official references:
- https://code.claude.com/docs/en/headless
- https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- https://support.claude.com/en/articles/12304248-manage-api-key-environment-variables-in-claude-code

## Progressive classroom sequence
Show the actual chat answer first. Explain the minimal shape `claude -p "your request"`. Run `sh run-first.sh` for the controlled demonstration, then `sh run-file.sh` for the evidence-file example. The scripts preserve the full tested flags without making the first slide a flag glossary.

#!/bin/sh
set -eu
cd "$(dirname "$0")"
claude --safe-mode -p --tools "" --model sonnet --effort low --system-prompt "Use only the supplied evidence. List facts and unknowns. Cite source IDs. Do not ask what to do." < northstar-context.txt > northstar-draft.txt
printf 'Open northstar-draft.txt and compare it with the source.\n'

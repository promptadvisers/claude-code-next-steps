#!/bin/sh
set -eu
claude --safe-mode -p --tools "" --model sonnet --effort low "Explain a CRM in one sentence."

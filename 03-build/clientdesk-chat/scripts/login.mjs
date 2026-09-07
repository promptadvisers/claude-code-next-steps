// Run inside Railway: railway ssh node scripts/login.mjs
// CLI login writes credentials directly to the private volume, never stdout.
import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const config = dirname(process.env.CLAUDE_AUTH_FILE || '/data/claude/.credentials.json');
mkdirSync(config, { recursive: true, mode: 0o700 });
const result = spawnSync(fileURLToPath(new URL('../node_modules/.bin/claude', import.meta.url)), ['auth', 'login', '--claudeai'], {
  stdio: 'inherit',
  env: { PATH: process.env.PATH, HOME: '/data', CLAUDE_CONFIG_DIR: config, LANG: 'C.UTF-8', BROWSER: 'echo' },
});
process.exit(result.status ?? 1);

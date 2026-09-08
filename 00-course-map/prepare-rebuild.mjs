#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = process.argv[2];
if (!arg) throw new Error('Usage: node 00-course-map/prepare-rebuild.mjs /path/to/new/ClientDesk-Rebuild');
const target = path.resolve(arg);
if (target === source || target.startsWith(source + path.sep)) throw new Error('Choose a separate folder outside the reference kit.');
try { await fs.access(target); throw new Error('Target already exists. Choose a new folder so no work is overwritten.'); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
await fs.mkdir(target, { recursive: true });
const copied = [];
async function copy(relative, destination = relative) {
  const input = path.join(source, relative);
  const output = path.join(target, destination);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.cp(input, output, { recursive: true, filter: p => !path.basename(p).startsWith('.') });
  copied.push({ source: relative, destination });
}
await copy('02-design');
await copy('01-planning/sample-data');
for (const name of ['BRIEF.md', 'SPEC.md', 'MILESTONES.md', 'DECISIONS.md', 'REBUILD-GUIDE.md']) {
  await copy('01-planning/' + name, '01-planning/REFERENCE-' + name);
}
for (const name of ['prepare-demo.mjs', 'check-fixture.mjs', 'test-hook.mjs']) await copy('00-course-map/' + name);
await copy('00-course-map/headless-example');
await copy('.claude/settings.example.json');
for (const name of ['SETUP.md', 'LOCAL-CLAUDE-CHAT.md', 'HOSTED-CLAUDE-CHAT.md', 'HOSTING-IN-PLAIN-ENGLISH.md']) await copy('05-deployment/' + name);
await fs.writeFile(path.join(target, 'README.md'), `# ClientDesk rebuild\n\nThis folder contains course inputs. Claude will create the app here.\n\nRead 01-planning/REFERENCE-BRIEF.md, REFERENCE-SPEC.md, REFERENCE-DECISIONS.md and 02-design/DESIGN.md. Draft and approve your own BRIEF.md, SPEC.md and MILESTONES.md using the course prompts. Keep the REFERENCE files for comparison.\n\nThe application path will be 03-build/clientdesk. Node 24 and port 4310 are planned. No application code or dependencies are supplied here. Run npm commands only after Claude creates package.json and its scripts. For a new app, npm install creates a lockfile; later clean installations use npm ci.\n\nKeep the finished reference in its separate folder. Stop it before running this rebuild on port 4310. Use fictional records and keep credentials outside Git.\n`);
await fs.writeFile(path.join(target, '.gitignore'), 'node_modules/\n.next/\n.data/\n.env*\n!.env.example\n.vercel/\n*.log\n.DS_Store\n');
execFileSync('git', ['init', target], { stdio: 'pipe' });
await fs.writeFile(path.join(target, 'REBUILD-INPUTS.json'), JSON.stringify({ suppliedInputsOnly: true, applicationSourceCopied: false, copied }, null, 2) + '\n');
console.log('Prepared:', target);
console.log('Own Git root:', execFileSync('git', ['-C', target, 'rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim());
console.log('Next: open this folder in Claude Code, verify the folder and model, then draft the brief.');

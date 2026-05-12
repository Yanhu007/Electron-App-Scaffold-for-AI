import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const version = process.argv[2] || JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8')).version;
const outputPath = path.resolve('release-notes.md');

const commits = execSync('git log --pretty=format:%s -n 20', { encoding: 'utf8' })
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean);

const sections = new Map([
  ['Guidance', []],
  ['Template Improvements', []],
  ['Build and Release Changes', []],
  ['Workflow Changes', []],
  ['Fixes', []],
]);

for (const commit of commits) {
  const lower = commit.toLowerCase();
  if (lower.includes('workflow') || lower.includes('ci')) {
    sections.get('Workflow Changes').push(commit);
  } else if (lower.includes('release') || lower.includes('version') || lower.includes('build')) {
    sections.get('Build and Release Changes').push(commit);
  } else if (lower.includes('template') || lower.includes('scaffold')) {
    sections.get('Template Improvements').push(commit);
  } else if (lower.startsWith('fix')) {
    sections.get('Fixes').push(commit);
  } else {
    sections.get('Guidance').push(commit);
  }
}

const lines = [`## What's New in v${version}`, ''];
for (const [section, items] of sections.entries()) {
  if (items.length === 0) {
    continue;
  }

  lines.push(`### ${section}`);
  for (const item of items) {
    lines.push(`- ${item}`);
  }
  lines.push('');
}

fs.writeFileSync(outputPath, `${lines.join('\n')}\n`);
console.log(`Release notes generated at ${path.relative(process.cwd(), outputPath)}`);
import fs from 'node:fs';
import path from 'node:path';

const versionType = process.argv[2] || 'patch';
const packageJsonPath = path.resolve('package.json');
const changelogPath = path.resolve('CHANGELOG.md');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const [major, minor, patch] = packageJson.version.split('.').map(Number);

const nextVersion = {
  patch: `${major}.${minor}.${patch + 1}`,
  minor: `${major}.${minor + 1}.0`,
  major: `${major + 1}.0.0`,
}[versionType];

if (!nextVersion) {
  throw new Error(`Unsupported version type: ${versionType}`);
}

packageJson.version = nextVersion;
fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

const existingChangelog = fs.readFileSync(changelogPath, 'utf8');
const normalizedChangelog = existingChangelog.replace(/\r\n/g, '\n');
const releaseHeader = `## v${nextVersion}\n\n- Version prepared with \`${versionType}\` release bump\n\n`;

fs.writeFileSync(
  changelogPath,
  normalizedChangelog.replace(/^## Unreleased\n\n/m, `## Unreleased\n\n${releaseHeader}`)
);

console.log(`Prepared ${versionType} release: v${nextVersion}`);
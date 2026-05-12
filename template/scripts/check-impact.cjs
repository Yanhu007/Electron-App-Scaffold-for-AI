const path = require('node:path');

const impactMap = [
  {
    match: 'src/main/',
    docs: ['src/main/ai.prompt.md', 'src/shared/ai.prompt.md'],
  },
  {
    match: 'src/preload/',
    docs: ['src/preload/ai.prompt.md', 'src/shared/ai.prompt.md'],
  },
  {
    match: 'src/renderer/',
    docs: ['src/renderer/ai.prompt.md', 'src/shared/ai.prompt.md'],
  },
  {
    match: 'src/shared/',
    docs: ['src/shared/ai.prompt.md'],
  },
];

const changedFiles = process.argv.slice(2);

if (changedFiles.length === 0) {
  console.log('Usage: npm run check:impact -- <changed-file> [changed-file...]');
  process.exit(0);
}

const impactedDocs = new Set();

for (const changedFile of changedFiles) {
  const normalizedPath = changedFile.split(path.sep).join('/');
  for (const rule of impactMap) {
    if (normalizedPath.includes(rule.match)) {
      for (const doc of rule.docs) {
        impactedDocs.add(doc);
      }
    }
  }
}

if (impactedDocs.size === 0) {
  console.log('No scaffold module docs flagged by impact check.');
  process.exit(0);
}

console.log('Review these module docs before finalizing the change:');
for (const doc of impactedDocs) {
  console.log(`- ${doc}`);
}
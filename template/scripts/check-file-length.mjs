import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve('src');
const maxLines = 400;
const allowedExtensions = new Set(['.ts', '.tsx']);

const files = [];

function walk(dirPath) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
}

walk(rootDir);

const violations = files
  .map((filePath) => {
    const lineCount = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).length;
    return { filePath, lineCount };
  })
  .filter(({ lineCount }) => lineCount > maxLines);

if (violations.length > 0) {
  console.error(`File length check failed. Limit: ${maxLines} lines.`);
  for (const violation of violations) {
    console.error(`- ${path.relative(process.cwd(), violation.filePath)}: ${violation.lineCount}`);
  }
  process.exit(1);
}

console.log(`File length check passed for ${files.length} source files.`);
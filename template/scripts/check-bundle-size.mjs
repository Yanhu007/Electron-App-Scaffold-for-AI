import fs from 'node:fs';
import path from 'node:path';

const bundleChecks = [
  { filePath: path.resolve('dist-electron/main/main.js'), maxBytes: 128 * 1024 },
  { filePath: path.resolve('dist-electron/preload/main.js'), maxBytes: 64 * 1024 },
  { filePath: path.resolve('dist-electron/renderer/renderer.js'), maxBytes: 256 * 1024 },
];

const missing = bundleChecks.filter(({ filePath }) => !fs.existsSync(filePath));
if (missing.length > 0) {
  console.error('Bundle size check requires a prior production build.');
  for (const entry of missing) {
    console.error(`- Missing: ${path.relative(process.cwd(), entry.filePath)}`);
  }
  process.exit(1);
}

const violations = bundleChecks
  .map(({ filePath, maxBytes }) => ({
    filePath,
    maxBytes,
    actualBytes: fs.statSync(filePath).size,
  }))
  .filter(({ actualBytes, maxBytes }) => actualBytes > maxBytes);

if (violations.length > 0) {
  console.error('Bundle size check failed.');
  for (const violation of violations) {
    console.error(
      `- ${path.relative(process.cwd(), violation.filePath)}: ${violation.actualBytes} bytes > ${violation.maxBytes} bytes`
    );
  }
  process.exit(1);
}

console.log('Bundle size check passed.');
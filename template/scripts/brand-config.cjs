const fs = require('node:fs');
const path = require('node:path');

const DEFAULT_BRAND = 'kosmos';
const brandName = process.env.BRAND || DEFAULT_BRAND;
const brandRoot = path.resolve(__dirname, '..', 'brands', brandName);
const configPath = path.join(brandRoot, 'config.json');

if (!fs.existsSync(configPath)) {
  throw new Error(`Unknown brand: ${brandName}. Expected ${configPath}`);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

module.exports = {
  DEFAULT_BRAND,
  name: brandName,
  config,
  paths: {
    root: brandRoot,
    rendererLogo: path.join(brandRoot, 'logo.svg'),
    buildResources: path.join(brandRoot, 'build'),
  },
};
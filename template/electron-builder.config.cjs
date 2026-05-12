const brandConfig = require('./scripts/brand-config.cjs');

module.exports = {
  appId: brandConfig.config.appId,
  productName: brandConfig.config.productName,
  extraMetadata: {
    name: brandConfig.name,
  },
  directories: {
    output: 'release',
    buildResources: brandConfig.paths.buildResources,
  },
  files: ['dist-electron/**/*', 'package.json'],
  publish: [
    {
      provider: 'github',
      owner: 'example-org',
      repo: 'electron-app-scaffold-for-ai',
      releaseType: 'release',
    },
  ],
  extraMetadata: {
    name: brandConfig.name,
    buildBrand: brandConfig.name,
  },
  win: {
    target: ['nsis'],
    artifactName: `${brandConfig.config.filenamePrefix}-\${version}-win-\${arch}.\${ext}`,
  },
  mac: {
    target: ['dmg'],
    artifactName: `${brandConfig.config.filenamePrefix}-\${version}-mac-\${arch}.\${ext}`,
  },
  linux: {
    target: ['AppImage'],
    artifactName: `${brandConfig.config.filenamePrefix}-\${version}-linux-\${arch}.\${ext}`,
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    shortcutName: brandConfig.config.shortcutName,
  },
  releaseInfo: {
    releaseName: `${brandConfig.config.productName} \${version}`,
    releaseNotes: 'See generated release notes artifact for details.',
  },
};
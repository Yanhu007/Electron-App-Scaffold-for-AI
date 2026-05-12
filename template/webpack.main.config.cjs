const path = require('node:path');

module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: './src/main/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist-electron/main'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              noEmit: false,
              module: 'CommonJS',
              moduleResolution: 'Node',
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  externalsPresets: { node: true },
};
import { defineConfig } from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    build: {
      lib: {
        entry: 'src/main/main.ts',
      },
      outDir: 'dist-electron/main',
    },
  },
  preload: {
    build: {
      lib: {
        entry: 'src/preload/main.ts',
      },
      outDir: 'dist-electron/preload',
    },
  },
  renderer: {
    plugins: [react()],
    root: 'src/renderer',
    build: {
      outDir: '../../dist-electron/renderer',
      rollupOptions: {
        input: 'src/renderer/index.html',
      },
    },
  },
});
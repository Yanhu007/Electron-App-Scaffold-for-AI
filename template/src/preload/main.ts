import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('appBridge', {
  getRuntimeInfo: () => ({
    platform: process.platform,
    arch: process.arch,
  }),
});

declare global {
  interface Window {
    appBridge: {
      getRuntimeInfo: () => {
        platform: string;
        arch: string;
      };
    };
  }
}
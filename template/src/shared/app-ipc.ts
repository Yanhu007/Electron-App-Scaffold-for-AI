import type { IpcMain } from 'electron';
import { APP_CHANNELS, type RuntimeInfo } from './app-contract';

export function registerAppHandlers(ipcMain: IpcMain): void {
  ipcMain.handle(APP_CHANNELS.getRuntimeInfo, async (): Promise<RuntimeInfo> => {
    return {
      platform: process.platform,
      arch: process.arch,
      electronVersion: process.versions.electron,
    };
  });
}
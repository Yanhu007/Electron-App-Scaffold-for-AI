import type { IpcMain } from 'electron';
import { APP_CHANNELS, type RuntimeInfo } from './app-contract';
import { createRuntimeInfo } from './runtime-info';

export function registerAppHandlers(ipcMain: IpcMain): void {
  ipcMain.handle(APP_CHANNELS.getRuntimeInfo, async (): Promise<RuntimeInfo> => {
    return createRuntimeInfo({
      platform: process.platform,
      arch: process.arch,
      electronVersion: process.versions.electron,
    });
  });
}
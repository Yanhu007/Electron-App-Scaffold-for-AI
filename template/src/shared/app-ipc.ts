import type { IpcMain } from 'electron';
import { APP_CHANNELS, type RuntimeInfo, type UpdateStatus } from './app-contract';
import { createRuntimeInfo } from './runtime-info';
import { getUpdateStatus } from '../main/updater';

export function registerAppHandlers(ipcMain: IpcMain): void {
  ipcMain.handle(APP_CHANNELS.getRuntimeInfo, async (): Promise<RuntimeInfo> => {
    return createRuntimeInfo({
      platform: process.platform,
      arch: process.arch,
      electronVersion: process.versions.electron,
    });
  });

  ipcMain.handle(APP_CHANNELS.getUpdateStatus, async (): Promise<UpdateStatus> => {
    return getUpdateStatus();
  });
}
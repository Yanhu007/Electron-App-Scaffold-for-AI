import { contextBridge, ipcRenderer } from 'electron';
import { APP_CHANNELS, type AppBridge, type RuntimeInfo, type UpdateStatus } from '../shared/app-contract';

const appBridge: AppBridge = {
  getRuntimeInfo: () => ipcRenderer.invoke(APP_CHANNELS.getRuntimeInfo) as Promise<RuntimeInfo>,
  getUpdateStatus: () => ipcRenderer.invoke(APP_CHANNELS.getUpdateStatus) as Promise<UpdateStatus>,
};

contextBridge.exposeInMainWorld('appBridge', appBridge);

declare global {
  interface Window {
    appBridge: AppBridge;
  }
}
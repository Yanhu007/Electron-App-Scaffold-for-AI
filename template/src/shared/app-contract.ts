export type RuntimeInfo = {
  platform: string;
  arch: string;
  electronVersion: string;
};

export type UpdateStatus = {
  available: boolean;
  channel: string;
  currentVersion: string;
};

export type AppBridge = {
  getRuntimeInfo: () => Promise<RuntimeInfo>;
  getUpdateStatus: () => Promise<UpdateStatus>;
};

export const APP_CHANNELS = {
  getRuntimeInfo: 'app:getRuntimeInfo',
  getUpdateStatus: 'app:getUpdateStatus',
} as const;
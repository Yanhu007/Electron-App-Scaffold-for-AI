export type RuntimeInfo = {
  platform: string;
  arch: string;
  electronVersion: string;
};

export type AppBridge = {
  getRuntimeInfo: () => Promise<RuntimeInfo>;
};

export const APP_CHANNELS = {
  getRuntimeInfo: 'app:getRuntimeInfo',
} as const;
import type { RuntimeInfo } from './app-contract';

export function createRuntimeInfo(input: {
  platform: NodeJS.Platform;
  arch: string;
  electronVersion: string;
}): RuntimeInfo {
  return {
    platform: input.platform,
    arch: input.arch,
    electronVersion: input.electronVersion,
  };
}
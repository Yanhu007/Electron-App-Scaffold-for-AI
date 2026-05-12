import { app } from 'electron';
import log from 'electron-log/main';
import { autoUpdater } from 'electron-updater';
import type { UpdateStatus } from '../shared/app-contract';

type UpdaterContext = {
  brandName: string;
};

let cachedStatus: UpdateStatus;

function getReleaseChannel(version: string): string {
  if (version.includes('-beta')) {
    return 'beta';
  }

  return 'stable';
}

export function initializeUpdater(context: UpdaterContext): void {
  cachedStatus = {
    available: false,
    channel: getReleaseChannel(app.getVersion()),
    currentVersion: app.getVersion(),
  };

  log.initialize();
  log.info(`[updater] initialized for brand=${context.brandName}`);

  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on('update-available', () => {
    cachedStatus = { ...cachedStatus, available: true };
    log.info('[updater] update available');
  });

  autoUpdater.on('update-not-available', () => {
    cachedStatus = { ...cachedStatus, available: false };
    log.info('[updater] no update available');
  });

  autoUpdater.on('error', (error) => {
    log.warn(`[updater] check failed: ${error instanceof Error ? error.message : String(error)}`);
  });
}

export function getUpdateStatus(): UpdateStatus {
  return cachedStatus;
}
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { registerAppHandlers } from '../shared/app-ipc';
import { getBrandConfig } from '../shared/brand';
import { initializeUpdater } from './updater';

registerAppHandlers(ipcMain);

const brand = getBrandConfig(process.env['BRAND']);
app.setName(brand.productName);
app.setPath('userData', path.join(app.getPath('appData'), brand.userDataName));

function createWindow(): void {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    title: brand.productName,
    webPreferences: {
      preload: path.join(__dirname, '../preload/main.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env['ELECTRON_RENDERER_URL']) {
    window.loadURL(process.env['ELECTRON_RENDERER_URL']);
    return;
  }

  window.loadFile(path.join(__dirname, '../renderer/index.html'));
}

app.whenReady().then(() => {
  initializeUpdater({ brandName: brand.name });
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
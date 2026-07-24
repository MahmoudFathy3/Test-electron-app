import { BrowserWindow, screen } from "electron";

export function createSplashWindow(preload: string, startUrl: string) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const splash = new BrowserWindow({
    width: Math.floor(width * 0.9),
    height: Math.floor(height * 0.9),
    frame: false,
    resizable: false,
    maximizable: false,
    minimizable: false,
    center: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload,
    },
  });
  splash.loadURL(startUrl);

  return splash;
}

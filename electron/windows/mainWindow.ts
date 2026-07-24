import { BrowserWindow, screen } from "electron";

export function createMainWindow(
  preload: string,
  icon: string,
  startUrl: string,
) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: Math.floor(width * 0.9),
    height: Math.floor(height * 0.9),
    autoHideMenuBar: true,
    icon,
    show: false,
    webPreferences: {
      preload,
    },
  });

  win.loadURL(startUrl);

  return win;
}

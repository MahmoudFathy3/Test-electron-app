import { screen, BrowserWindow, app } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
function createMainWindow(preload, icon, startUrl) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: Math.floor(width * 0.9),
    height: Math.floor(height * 0.9),
    autoHideMenuBar: true,
    icon,
    show: false,
    webPreferences: {
      preload
    }
  });
  win.loadURL(startUrl);
  return win;
}
function createSplashWindow(preload, startUrl) {
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
      preload
    }
  });
  splash.loadURL(startUrl);
  return splash;
}
const __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname$1, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let mainWindow = null;
let splashWindow = null;
function getMainUrl() {
  if (VITE_DEV_SERVER_URL) {
    return `${VITE_DEV_SERVER_URL}#/`;
  }
  return `file://${path.join(RENDERER_DIST, "index.html")}`;
}
function getSplashUrl() {
  if (VITE_DEV_SERVER_URL) {
    return `${VITE_DEV_SERVER_URL}#/splash`;
  }
  return `file://${path.join(RENDERER_DIST, "index.html")}#/splash`;
}
app.whenReady().then(() => {
  splashWindow = createSplashWindow(
    path.join(__dirname$1, "preload.mjs"),
    getSplashUrl()
  );
  splashWindow.show();
  setTimeout(() => {
    mainWindow = createMainWindow(
      path.join(__dirname$1, "preload.mjs"),
      path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
      getMainUrl()
    );
    mainWindow.once("ready-to-show", () => {
      console.log("Main Loaded");
      mainWindow == null ? void 0 : mainWindow.show();
      splashWindow == null ? void 0 : splashWindow.close();
    });
  }, 3e3);
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = createMainWindow(
      path.join(__dirname$1, "preload.mjs"),
      path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
      getMainUrl()
    );
    mainWindow.show();
  }
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    mainWindow = null;
    splashWindow = null;
  }
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};

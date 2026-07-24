import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createMainWindow } from "./windows/mainWindow";
import { createSplashWindow } from "./windows/splashWindow";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_ROOT = path.join(__dirname, "..");

export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let mainWindow: BrowserWindow | null = null;
let splashWindow: BrowserWindow | null = null;

function getMainUrl() {
  if (VITE_DEV_SERVER_URL) {
    return `${VITE_DEV_SERVER_URL}#/`;
  }

  return `file://${path.join(RENDERER_DIST, "index.html")}`;
}

// مؤقتًا هنفتح نفس الصفحة لحد ما نعمل splash.html
function getSplashUrl() {
  if (VITE_DEV_SERVER_URL) {
    return `${VITE_DEV_SERVER_URL}#/splash`;
  }

  return `file://${path.join(RENDERER_DIST, "index.html")}#/splash`;
}

app.whenReady().then(() => {
  splashWindow = createSplashWindow(
    path.join(__dirname, "preload.mjs"),
    getSplashUrl(),
  );

  splashWindow.show();

  setTimeout(() => {
  mainWindow = createMainWindow(
    path.join(__dirname, "preload.mjs"),
    path.join(process.env.VITE_PUBLIC!, "electron-vite.svg"),
    getMainUrl(),
  );

  // mainWindow.webContents.once("did-finish-load", () => {
  mainWindow.once("ready-to-show", () => {
    console.log("Main Loaded");
    mainWindow?.show();
    splashWindow?.close();
  });
  }, 3000);
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = createMainWindow(
      path.join(__dirname, "preload.mjs"),
      path.join(process.env.VITE_PUBLIC!, "electron-vite.svg"),
      getMainUrl(),
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

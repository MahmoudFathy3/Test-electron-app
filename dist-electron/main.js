import { screen as u, BrowserWindow as p, app as i } from "electron";
import { fileURLToPath as R } from "node:url";
import e from "node:path";
function w(l, a, c) {
  const { width: h, height: t } = u.getPrimaryDisplay().workAreaSize, d = new p({
    width: Math.floor(h * 0.9),
    height: Math.floor(t * 0.9),
    autoHideMenuBar: !0,
    icon: a,
    show: !1,
    webPreferences: {
      preload: l
    }
  });
  return d.loadURL(c), d;
}
function _(l, a) {
  const { width: c, height: h } = u.getPrimaryDisplay().workAreaSize, t = new p({
    width: Math.floor(c * 0.9),
    height: Math.floor(h * 0.9),
    frame: !1,
    resizable: !1,
    maximizable: !1,
    minimizable: !1,
    center: !0,
    alwaysOnTop: !0,
    autoHideMenuBar: !0,
    show: !1,
    webPreferences: {
      preload: l
    }
  });
  return t.loadURL(a), t;
}
const s = e.dirname(R(import.meta.url));
process.env.APP_ROOT = e.join(s, "..");
const r = process.env.VITE_DEV_SERVER_URL, g = e.join(process.env.APP_ROOT, "dist-electron"), f = e.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = r ? e.join(process.env.APP_ROOT, "public") : f;
let o = null, n = null;
function m() {
  return r ? `${r}#/` : `file://${e.join(f, "index.html")}`;
}
function P() {
  return r ? `${r}#/splash` : `file://${e.join(f, "index.html")}#/splash`;
}
i.whenReady().then(() => {
  n = _(
    e.join(s, "preload.mjs"),
    P()
  ), n.show(), setTimeout(() => {
    o = w(
      e.join(s, "preload.mjs"),
      e.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
      m()
    ), o.once("ready-to-show", () => {
      console.log("Main Loaded"), o == null || o.show(), n == null || n.close();
    });
  }, 3e3);
});
i.on("activate", () => {
  p.getAllWindows().length === 0 && (o = w(
    e.join(s, "preload.mjs"),
    e.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    m()
  ), o.show());
});
i.on("window-all-closed", () => {
  process.platform !== "darwin" && (i.quit(), o = null, n = null);
});
export {
  g as MAIN_DIST,
  f as RENDERER_DIST,
  r as VITE_DEV_SERVER_URL
};

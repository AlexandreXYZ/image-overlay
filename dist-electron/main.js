import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let mainWindow = null;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 40,
        height: 40,
        frame: false,
        transparent: true,
        movable: true,
        resizable: true,
        alwaysOnTop: true,
        hasShadow: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    const isDev = !app.isPackaged;
    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
    }
    else {
        mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
    }
    mainWindow.setAlwaysOnTop(true, "screen-saver");
}
app.whenReady().then(createWindow);
ipcMain.on("set-click-through", (_event, shouldIgnore) => {
    mainWindow?.setIgnoreMouseEvents(shouldIgnore, { forward: true });
});
ipcMain.on("set-shape", (_event, rects) => {
    // Shape the window so only the image area is clickable; rest passes through
    mainWindow?.setShape(rects);
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});

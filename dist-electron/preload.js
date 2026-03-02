import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("api", {
    setClickThrough(shouldIgnore) {
        ipcRenderer.send("set-click-through", shouldIgnore);
    },
    setShape(rects) {
        ipcRenderer.send("set-shape", rects);
    },
});

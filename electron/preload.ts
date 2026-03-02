import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
	setClickThrough(shouldIgnore: boolean) {
		ipcRenderer.send("set-click-through", shouldIgnore);
	},
	setShape(
		rects: Array<{ x: number; y: number; width: number; height: number }>,
	) {
		ipcRenderer.send("set-shape", rects);
	},
});

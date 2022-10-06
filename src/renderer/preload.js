const { contextBridge, BrowserWindow, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("app", {
    environment: () => Alpha,
    version: () => "1.0.0",
    openSimpleCrosshairs: () => ipcRenderer.invoke("openSimpleCrosshairs"),
    closeWindow: () => ipcRenderer.invoke("closeWindow")
})

contextBridge.exposeInMainWorld("crosshairs", {
    test: () => ipcRenderer.invoke("testhair")
})

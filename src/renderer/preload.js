const { contextBridge, BrowserWindow, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("app", {
    environment: () => process.env.ENVIRONMENT,
    version: () => process.env.VERSION,
})

const { app, BrowserWindow, ipcMain } = require ("electron")
const path = require("path")
require("dotenv").config()

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "src/renderer/preload.js")
        },
    })
    win.loadFile(`src/renderer/index.html`)
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    if(!process.platform !== "darwin") app.quit()
})
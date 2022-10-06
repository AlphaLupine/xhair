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

ipcMain.handle("testhair", () => {
    const win = new BrowserWindow({
        width: 100,
        height: 100,
        frame: false,
        transparent: true,
        closable: true,
        alwaysOnTop: true,
        maximizable: false,
        minimizable: false,
        movable: false,
        resizable: false
    })
    win.loadFile(`src/renderer/crosshair.html`)
    win.center()
    win.show()
})
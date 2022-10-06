const { app, BrowserWindow, ipcMain, screen } = require ("electron")
const path = require("path")
require("dotenv").config()

if (require('electron-squirrel-startup')) return app.quit();

let mainWindow
let mainScreen


const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "src/renderer/preload.js")
        },
        frame: false
    })
    mainWindow.loadFile(`src/renderer/index.html`)
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows === 0) createWindow()
    })

    mainScreen = screen.getPrimaryDisplay();
})

app.on("window-all-closed", () => {
    if(!process.platform !== "darwin") app.quit()
})

ipcMain.handle("closeWindow", () => {
    const window = BrowserWindow.getFocusedWindow()
    console.log(window)
    if(window === mainWindow) {
        return app.exit(0)
    }
    window.close()
})

ipcMain.handle("openSimpleCrosshairs", () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        parent: mainWindow,
        webPreferences: {
            preload: path.join(__dirname, "src/renderer/preload.js")
        },
        frame: false
    })
    win.loadFile(`src/renderer/simpleCrosshairs.html`)
    win.once("ready-to-show", () => {
        win.show();
    })
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
        resizable: false,
        skipTaskbar: true,
        x: (mainScreen.size.width / 2) - 50,
        y: (mainScreen.size.height / 2) - 50,
    })
    win.loadFile(`src/renderer/crosshair.html`)
    win.show()
})
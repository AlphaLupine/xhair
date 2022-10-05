const { app, BrowserWindow } = require ("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800
    })

    win.loadFile(`renderer/index.html`)
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
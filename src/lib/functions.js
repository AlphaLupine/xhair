function displayWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
    })

    win.loadFile(`renderer/index.html`)
}
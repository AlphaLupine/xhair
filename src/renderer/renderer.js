const windowTopBar = document.createElement('draggable')
windowTopBar.style.width = "100%"
windowTopBar.style.height = "32px"
windowTopBar.style.position = "absolute"
windowTopBar.style.top = windowTopBar.style.left = 0
windowTopBar.style.webkitAppRegion = "drag"
document.body.appendChild(windowTopBar)

const appInfo = document.getElementById("app-info")
appInfo.innerText = [
    `Environment: ${app.environment()}`,
    `Version: ${app.version()}` 
].join("\n")

const openSimpleHairs = document.getElementById("btn-open-simple-crosshairs")
openSimpleHairs?.addEventListener("click", () => {
    app.openSimpleCrosshairs()
})

const testHair = document.getElementById("test-button")
testHair?.addEventListener("click", () => {
    crosshairs.test()
})

const closeButton = document.getElementById("close-button")
closeButton.addEventListener("click", () => {
    app.closeWindow()
})


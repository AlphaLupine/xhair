const appInfo = document.getElementById("app-info")
appInfo.innerText = [
    `Environment: ${app.environment()}`,
    `Version: ${app.version()}` 
].join("\n")


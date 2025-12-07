const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 360,
        height: 520,
        resizable: true,           
        webPreferences: {
            preload: path.join(__dirname, "renderer.js")
        }
    });

    win.setMenuBarVisibility(false);
    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

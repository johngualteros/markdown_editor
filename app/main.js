const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800,show: false, height: 600, webPreferences: {nodeIntegration: true}})
    mainWindow.loadFile(__dirname + '/index.html')
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        // mainWindow.webContents.openDevTools();
    })
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})
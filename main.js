const {app, BrowserWindow} = require('electron')

app.whenReady().then(() =>{
    //create window
    const myWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // loading html page
    myWindow.loadFile('index.html');
    
    // loading console
    myWindow.webContents.openDevTools();
})
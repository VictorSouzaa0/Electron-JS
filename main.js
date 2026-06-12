const {app, BrowserWindow} = require('electron')


const createWindow = () => {
    
    const myWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })
        // loading html page    
        myWindow.loadFile('index.html');
        
        // loading console
        myWindow.webContents.openDevTools();
}
app.whenReady().then(() => {
    createWindow();
})

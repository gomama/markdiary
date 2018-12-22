const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the Javascript is garbage collected.
let win

function createWindow () {
    // create the browser window
    win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('index.html')

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})
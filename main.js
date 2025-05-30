/*This is a journal app that uses markdown language to make it dynamic*/

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Needed for nodeIntegration in recent Electron
    }
  });

  // Load the index.html of the app.
  win.loadFile('index.html');
}

// This method will be called when Electron has finished initialization.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
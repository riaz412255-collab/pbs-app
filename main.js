const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

function findHtml() {
  const files = fs.readdirSync(__dirname).filter(f => f.toLowerCase().endsWith('.html'));
  return files.includes('index.html') ? 'index.html' : files[0];
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 750,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png')
  });
  win.setMenuBarVisibility(false);
  win.maximize();
  win.loadFile(findHtml());
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());

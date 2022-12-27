
const {BrowserWindow} = require('electron')
const path = require('path')


const settingPage = ()=>{
    
  const child = new BrowserWindow({

    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.join(__dirname, '../listener_preload.js')
    }
})
child.webContents.openDevTools()
child.loadFile(path.join(__dirname, '../../pages/listener.html'))

child.show()
}


module.exports = settingPage

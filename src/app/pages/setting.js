
const {BrowserWindow} = require('electron')
const path = require('path')


const settingPage = ()=>{
    
    const setting = new BrowserWindow({
  
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, '../preload.js')
        }
    })
    setting.webContents.openDevTools()
    setting.loadFile(path.join(__dirname, '../../pages/setting.html'))
    
    setting.show()
}


module.exports = settingPage

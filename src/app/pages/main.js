
const {BrowserWindow,Menu} = require('electron')
const path = require('path')

let template = [{
    label: "menu",
    submenu: [
        {
            label: 'submenu',
            click: function () {
                console.log('tes')
            }
        }
    ],
    
},{
    label:"setting",
    click:function(){
        const setting = require('./setting')
        setting()
    }
}
]
const myMenu = Menu.buildFromTemplate(template)

const mainPage = ()=>{
    const win = new BrowserWindow({
  
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.webContents.openDevTools()
    win.loadFile(path.join(__dirname, '../../pages/index.html'))
    Menu.setApplicationMenu(myMenu)
    win.show()
    // return win
}


module.exports = mainPage
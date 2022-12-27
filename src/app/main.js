const {app, BrowserWindow, ipcMain, Menu,remote} = require('electron')
const path = require('path')
const {connect} = require('./database.js')
const Store = require('electron-store');
const store = new Store();
const main = require('./pages/main')
const settingPage = require('./pages/setting')
const listener = require('./pages/listener');

function createWindow() {
 
    // win.setFullScreen(true);
    if (! store.get('setting')) {
        settingPage()
    } else {
       const setting =  store.get('setting')
        connect(JSON.parse(setting))
        // main()
        listener()
    }


    ipcMain.on("save:settings", async (even, args) => {
        await store.set('setting',args)
        await connect(JSON.parse(args))
        console.log(args)
        app.relaunch()
        app.exit()
        even.sender.send("save:settings", "sukses");

    })
    ipcMain.on("konek", async (even, args) => {
        console.log()
        await store.delete('setting')
        app.relaunch()
        app.exit()
        even.sender.send("onkonek", "sukses");
    })
}

app.whenReady().then(() => {

    createWindow()
    // Untuk Mac os perlu melakukan create Window saat active
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => { // Selain macc os perlu memanggil method quit untuk benar benar close aplikasi
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

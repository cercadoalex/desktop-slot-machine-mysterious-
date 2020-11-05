// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    Menu
} = require('electron');

const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let configurationWindow;


///COMENTADO POR QUE CUANDO GUARDO EL JSON SE ACTUALIZA LA WEB

/*
if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electrom: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}*/



function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        //closable: false,
        frame: false,

        //sacar restrinnciones del navegador
        kiosk: true,
        webSecurity: false

    });

    //https://thecodersblog.com/play-video-unmuted-in-electron-app/
    //sacar restrinnciones del navegador
    app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required")



    //pantalla maximizada
    mainWindow.maximize();

    //pantalla sin menu
    mainWindow.setMenu(null);

    // and load the index.html of the app.  
    mainWindow.loadFile('misterioso.html');

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createWindow();

    const template = [{
        label: 'Configuracion',
        submenu: [{
                label: 'Servicos ',
                accelerator: 'Ctrl+I',
                click() {
                    Configuration();
                }
            },
            {
                label: 'Refresh ',
                accelerator: 'Ctrl+R',
                click() {
                    mainWindow.reload();
                }
            }, {
                label: 'Refresh ',
                accelerator: 'Ctrl+D',
                click() {
                    mainWindow.webContents.openDevTools()
                }
            },
            {
                label: 'Refresh ',
                accelerator: 'Ctrl+G',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/ganador.html`)
                }
            },
            {
                label: 'Refresh ',
                accelerator: 'Ctrl+M',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/misterioso.html`)
                }
            }

        ]
    }]
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);



    if (process.platform === 'win32') {
        app.setAppUserModelId("com.pelosac.desktop-video-imagen");
        //app.setAppUserModelId(process.execPath);
    }
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.




function Configuration() {
    configurationWindow = new BrowserWindow({
        width: 410, //400
        height: 390, //230
        title: 'Configurar',
        minimizable: false,
        resizable: false,
        closable: true,
        scrollBounce: false,

    });
    configurationWindow.setMenu(null);
    //configurationWindow.webContents.openDevTools()
    configurationWindow.loadFile('config.html');
    configurationWindow.on('closed', () => {
        configurationWindow = null;
    });
}
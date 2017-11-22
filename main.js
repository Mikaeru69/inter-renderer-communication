const { app, BrowserWindow } = require ('electron');
global.window1 = null;
global.window2 = null;
function onAppReady ()
{
    window1 = new BrowserWindow ({ width: 600, height: 500 });
    window1.loadURL (`file://${__dirname}/index1.html`);
    window1.webContents.openDevTools ();
	window1.on ('closed', () => { window1 = null; });
    //
	window2 = new BrowserWindow ({ width: 500, height: 600 });
	window2.loadURL (`file://${__dirname}/index2.html`);
    window2.webContents.openDevTools ();
	window2.on ('closed', () => { window2 = null; });
}
app.on ('ready', onAppReady);
app.on ('window-all-closed', () => { app.quit (); });

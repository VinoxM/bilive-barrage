import {ipcMain, BrowserWindow, globalShortcut} from 'electron'

const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080/#/answer`
    : `file://${__dirname}/index.html#/answer`

export const answer = {
    url: winURL,
    window: null,
    createWindow: () => {
        answer.window = new BrowserWindow({
            useContentSize: true,
            height: 145,
            width: 280,
            webPreferences: {
                devTools: false//process.env.NODE_ENV === 'development'
            },
            frame: false,
            resizable: false,
            alwaysOnTop: true,
            skipTaskbar: true,
            maximizable: false
        })

        let answerWindow = answer.window

        answerWindow.loadURL(winURL)

        answerWindow.on('closed', () => {
            answer.window = null
        })

        answerWindow.hide()
    }
}

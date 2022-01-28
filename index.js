import path from 'path'
import child_process from 'child_process'
import fs from 'fs'
import os from "os"


function task_A() {
    const homeFolder = path.join(os.homedir())
    console.log('homeFolder', homeFolder)
    fs.readdir(homeFolder, (err, files) => {
        console.log('files of homeFolder', files)
        console.log('________________________')
    })
}

task_A()

function task_C() {
    child_process.exec('start cmd.exe /k node hello-terminal.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        console.log(`stdout:\n${stdout}`);
    })
}

task_C()

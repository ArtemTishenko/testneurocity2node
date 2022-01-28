const fs = require('fs') //fileSystem
const path = require('path')
const https = require('https')


//****** Task b*******************//

const linkCloudStorage = 'https://files.akzia.com/test/'

https.get(linkCloudStorage, (response) => {
    createDownloadFolder()
    response.on('data', (d) => {
        const arrayData = Buffer.from(d).toString()
        const jsonArray = JSON.parse(arrayData)
        jsonArray.forEach(jsonItem => {
            console.log(jsonItem.name)
            if (jsonItem.size !== 0) {
                downloadFile(`${jsonItem.name}`)
            }
        })
    })
})

const createDownloadFolder = () => {
    fs.rmSync('downloads', {recursive: true, force: true});
    fs.mkdir(path.join(__dirname, 'downloads'), (err) => {
        if (err) {
            throw err
        }
    })
}

function downloadFile(fileName) {
    const filePathDownload = path.join(__dirname, 'downloads', `${fileName}`)
    const file = fs.createWriteStream(`${filePathDownload}`)
    const request = https.get(`https://files.akzia.com/test/${fileName}`, (response) => {
        response.pipe(file)
    })

}


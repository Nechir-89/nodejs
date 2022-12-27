const fs = require('fs')
const os = require('os')
const path = require('path')

const p = (a) => console.log(a);

const fileInfo = `Hello,\nI am a Robot.\nThis file locates ${path.join(__dirname, 'files')}\nThe file name is ${path.basename(__filename)}`
const osInfo = `\n\nBellow are OS information for your server\n
                OS Type: ${os.type()},\n
                OS Version: ${os.version()},\n
                OS home directory: ${os.homedir()},\n
                OS platform: ${os.platform},\n
                OS architecture: ${os.arch()},\n
                OS release: ${os.release()}\n`

const data = fileInfo + osInfo

fs.writeFileSync(path.join(__dirname, 'files', 'OS.txt'), data, err => {
  if (err) throw err;
})

fs.readFile(path.join(__dirname, 'files', 'OS.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  p(data)
})
process.on('uncaughtException', (err) => {
  p("There was an error: " + err)
  process.exit(1);
})

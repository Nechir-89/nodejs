const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { p } = require('./index')

const dirname = 'temp'

fs.writeFileSync(path.join(__dirname, dirname, 'temp.txt'), 'temp data', err => {
  if (err) throw err;
  p('File created');
})
// if (!fs.existsSync(path.join(__dirname, dirname))) {
//   fs.mkdir(path.join(__dirname, dirname), err => {
//     if (err) throw err;
//     p('Folder created')
//   })
// }

// fsPromises.existsSync


if (fs.existsSync(path.join(__dirname, dirname))) {
  fs.rmdir(path.join(__dirname, dirname), err => {
    if (err) throw err;
    p('Directory removed')
  })
}

process.on('uncaughtException', err => {
  p(`There was an error: ${err}`)
  process.exit(1);
})

// const createDirectory = async () => {
//   try {
//     await fsPromises.mkdir(path.join(__dirname, 'new'))
//   } catch (err) {
//     console.error(err)
//   }
// }

// createDirectory();

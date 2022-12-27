const fsPromises = require('fs').promises;
const path = require('path')
const p = a => console.log(a)

const fileOps = async () => {
  let starterFile = path.join(__dirname, 'files', 'starter.txt')
  let tempFile = path.join(__dirname, 'files', 'temp.txt')
  let newFile = path.join(__dirname, 'files', 'greeting.txt')
  try {
    const data = await fsPromises.readFile(starterFile, 'utf8')
    await fsPromises.unlink(starterFile)
    await fsPromises.writeFile(tempFile, data)
    await fsPromises.appendFile(tempFile, '\nHello I am Robot.')
    await fsPromises.rename(tempFile, newFile)
    const newData = await fsPromises.readFile(newFile, 'utf8')
    p(newData)
  } catch (err) {
    console.error(err)
  }
}

fileOps()

// fs.rename(path.join(__dirname, 'files', 'hello.txt'), path.join(__dirname, 'files', 'starter.txt'), err=>{
//   if(err) throw err;
//   p('file renamed.')
// })
// // const readFile = () => fs.readFileSync(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
// //   if (err) throw err;
// //   return data
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply2.txt'), readFile(), err => {
//   if (err) throw err
//   p('Writing completed!')

//   fs.appendFile(path.join(__dirname, 'files', 'reply2.txt'), 'Great to see ya!', err => {
//     if (err) throw err;
//     p('Text appended.')
//     fs.rename(path.join(__dirname, 'files', 'reply2.txt'), path.join(__dirname, 'files', 'reply4.txt'), err => {
//       if (err) throw err;
//       p('file renamed!')
//     })
//   })

// })


// process.on('uncaughtException', err => {
//   p(err.message)
//   p(`There was an uncaught error: ${err}`)
//   process.exit(1);
// })

module.exports = { p }
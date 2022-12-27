const http = require('http')
const path = require('path')
const fs = require('fs')


const { logEvents } = require('../logEvents')
const EventEmitter = require('events')
class Emitter extends EventEmitter { }
const eventEmitter = new Emitter();
eventEmitter.on('serverRun', msg => logEvents(msg))

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html')
  const url = req.url;
  fileExtension = path.extname(url)
  let contentType = '';
  // files we expect serving them
  contentType = findContentType(fileExtension)
  console.log(url)
  let filePath =
    contentType === 'text/html' && url === '/' ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && url.slice(-1) === '/' ? path.join(__dirname, 'views',url, 'index.html')
        : contentType === 'text/html' ? path.join(__dirname, 'views', url)
          : path.join(__dirname, url)

  // if there is no extention with ni slash at the end of url
  if(!fileExtension && url.slice(-1) !== '/') filePath += '.html'
  
  const fileExist = fs.existsSync(filePath);

  if(fileExist){
    // serve the file
  }else{
    // 404 page
    // 301 redirect
    // console.log(path.basename(filePath));
    switch(path.basename(filePath)){
      case 'about.html': 
        // localhost:3001/about
        res.writeHead(301, {'Location': '/about/index.html'})
        res.end();
        break;
    }
  }


  // fs.readFile(filePath, 'utf8', (err, data) => {
  //   res.end(data);
  // })

})

process.on('uncaughtException', (err) => {
  p("There was an error: " + err)
  process.exit(1);
})

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  eventEmitter.emit('serverRun', `Server started to run on port ${PORT}`)
})


function findContentType(file) {
  
  switch (file) {
    case '.css':
      return 'text/css'
    case '.js':
      return 'text/javascript'
    case '.json':
      return 'application/json'
    case '.csv':
      return 'text/csv'
    case '.jpg':
      return 'image/jpeg'
    case '.png':
      return 'image/png';
    case '.txt':
      return 'text/plain';
    default:
      return 'text/html'
  }
}
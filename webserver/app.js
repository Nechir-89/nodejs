// import http from 'node:http';
const http = require('node:http');

const hostname = 'localhost';
// const port = env.process.PORT || 3000;
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server is running!');
})


server.listen(port, hostname, () => {
  console.log(`Application is ready to serve on port ${port}`)
})


const http = require('node:http');
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// creating server looks like doesn't need CORS setup
// because i'm making requests from chrome browser and it shows up 
// server's respond

const server = http.createServer((req, res) => {
  res.statusCode = 200; // ok
  res.setHeader('Content-Type', 'text/plain');
  res.end('server is running.')
});

server.listen(port, hostname, () => {
  console.log(`Application is running at http://${hostname}:${port}`);
});

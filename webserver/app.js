// const http= require('node:http')
const express = require('express');
const app = express();
// hostname and port needed for nodejs while express will ask only for port
const port = process.env.PORT || 4500;

// serve first request
app.get('/', (req, res)=>{
  res.send('data from server for get request from / url')
})


app.listen(port, () => {
  console.log(`Application is running on port ${port}`)
})


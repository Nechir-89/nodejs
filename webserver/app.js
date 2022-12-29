// const http= require('node:http')
const express = require('express');
const path = require('path');

const app = express();
// hostname and port needed for nodejs while express will ask only for port
const port = process.env.PORT || 4500;

app.use(express.static(path.join(__dirname, 'images')));

// serve first request
// app.METHOD(PATH, HANDLER)
app.get('/staticimages', (req, res) => {
  res.send('data from server for get request from / url')
});

app.use('/staticpages', express.static(path.join(__dirname, 'views')));


app.listen(port, () => {
  console.log(`Application is running on port ${port}`)
})


app.use('/staticdata',express.static(path.join(__dirname, 'data')));

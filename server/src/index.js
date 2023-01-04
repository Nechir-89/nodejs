const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Server is running</h2>');
})

const usersRoute = require('./routes/usersRouter');
app.use('/api/users', usersRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})


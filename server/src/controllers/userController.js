

const getAllUsers = (req, res) => {
  res.send('<h1>we can get all users</h2>')
}

const getUser = (req, res) => {
  res.send(`<h1>we can get specific user with ${req.params.id}`);
}

const postUser = (req, res) => {
  res.send('<h1>we can post users</h2>');
}

module.exports = { getAllUsers, getUser, postUser };
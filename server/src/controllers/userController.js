

const getAllUsers = (req, res) => {
  res.json({ "users": "all" });
}

const getUser = (req, res) => {
  // res.json({ "users": req.params.id });
  res.send(`<h1>we can get specific user with ${req.params.id}`);
}

function postUser(req, res) {
  res.json({"users": "post new user"})
  // res.send('<h1>we can post users</h2>');
}

module.exports = { getAllUsers, getUser, postUser };
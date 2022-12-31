const { Router } = require('express');
const router = Router();
// const userController = require('../controllers/userController');
router.get('/', (req, res) => {
  res.send('<h1>we can get all users</h2>');
});

router.get('/:id', (req, res) => {
  res.send(`<h1>we can get specific user with ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('<h1>we can post users</h2>');
});

module.exports = router;

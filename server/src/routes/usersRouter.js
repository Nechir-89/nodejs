const { Router } = require('express');
const router = Router();
const {getAllUsers, getUser, postUser} = require('../controllers/userController');

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.post('/', postUser);

module.exports = router;

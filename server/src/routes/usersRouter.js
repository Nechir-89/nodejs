const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers());

router.get('/:id', userController.getUser());

router.post('/', userController.postUser());

module.exports = router;

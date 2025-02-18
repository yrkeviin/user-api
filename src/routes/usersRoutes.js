const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/', usersControllers.getAllUsers);
router.post('/', usersControllers.addUser);
router.get('/:id', usersControllers.userById);
router.put('/:id', usersControllers.updateUser);
router.delete('/:id', usersControllers.deleteUser);

module.exports = router;

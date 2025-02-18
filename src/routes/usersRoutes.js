const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/', usersControllers.getAllUsers);
router.post('/', usersControllers.addUser);

module.exports = router;

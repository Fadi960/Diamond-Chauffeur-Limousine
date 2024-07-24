const express = require('express');
const router = express.Router();
const { login, register, logout, resetPassword } = require('../controller/authController');


router.post('/login', login);
router.post('/register',  register);
router.post('/logout', logout);
router.patch('/resetPassword', resetPassword);

module.exports = router;

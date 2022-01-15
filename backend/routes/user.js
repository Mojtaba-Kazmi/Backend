const express = require('express');
const userCtrl = require('../controllers/user');
const checkEmail = require('../middleware/check-email')
const checkPassword = require('../middleware/check-password')

const router = express.Router();

router.post('/signup', checkEmail,checkPassword,userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
const express = require('express');
const router = express.Router();

const verifyUser = require('../utils/verifyUser');
const { register, profile } = require('../controllers/user.controller');

router.post('/signup', register);
router.get('/home', verifyUser, profile );

module.exports = router;
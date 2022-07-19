const express = require('express');
const router = express.Router();

const AuthController = require('./auth.controller');

router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/forgotPassword', AuthController.forgotPassword);
router.post('/auth/resetPassword', AuthController.resetPassword);

module.exports = router;

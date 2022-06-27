const express = require("express");
const router = express.Router();

const AuthController = require("./auth.controller");

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

module.exports = router;

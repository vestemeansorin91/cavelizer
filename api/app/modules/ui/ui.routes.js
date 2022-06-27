const express = require("express");
const router = express.Router();

const UIController = require("./ui.controller");
router.get("/", UIController.redirectToUi);

module.exports = router;

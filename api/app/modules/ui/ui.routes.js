const express = require("express");
const router = express.Router();

const UIController = require("./ui.controller");
router.get("/", UIController.redirectToUI);
router.get('/ui', UIController.serveUI)

module.exports = router;

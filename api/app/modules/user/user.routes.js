const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");

// PREFIX: /api/users
router.get("", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.post("", UserController.createUser);
router.patch("/:id/toggleIsActive", UserController.toggleUserActive);
router.delete("/:id", UserController.deleteUser);

module.exports = router;

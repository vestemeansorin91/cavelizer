const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.patch("/users/:id/toggleIsActive", UserController.toggleUserActive);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;

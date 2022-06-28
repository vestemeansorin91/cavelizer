const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");

const passport = require("passport");
const AuthenticatedMiddleware = passport.authenticate("jwt", {
  session: false,
});

// nested routes
const publicProfileRoutes = require("./schemas/public-profile/public-profile.routes");

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById);
router.patch(
  "/users/:id/toggleIsActive",
  AuthenticatedMiddleware,
  UserController.toggleUserActive
);
router.use(publicProfileRoutes);
router.delete("/users/:id", AuthenticatedMiddleware, UserController.deleteUser);

module.exports = router;

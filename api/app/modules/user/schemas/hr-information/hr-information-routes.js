const express = require("express");
const router = express.Router();
const HrInformationController = require("./hr-information-controller");

const passport = require("passport");
const AuthenticatedMiddleware = passport.authenticate("jwt", {
  session: false,
});

router.patch(
  "/users/:userId/updateHrInformation",
  AuthenticatedMiddleware,
  HrInformationController.updateHrInformation
);

module.exports = router;

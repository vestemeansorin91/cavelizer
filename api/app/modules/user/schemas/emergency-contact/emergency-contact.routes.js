const express = require('express');
const router = express.Router();
const EmegencyContactController = require('./emergency-contact.controller');

const passport = require('passport');
const AuthenticatedMiddleware = passport.authenticate('jwt', {
  session: false
});

router.patch('/users/:userId/updateEmergencyContact', AuthenticatedMiddleware, EmegencyContactController.updateEmergencyContact);

module.exports = router;
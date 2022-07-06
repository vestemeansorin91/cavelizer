const express = require('express');
const router = express.Router();
const EmegencyContactController = require('./emergency-contact.controller');

const passport = require('passport');
const isAuthenticatedMiddleware = passport.authenticate('jwt', {
  session: false
});

router.patch('/users/:userId/updateEmergencyContact', isAuthenticatedMiddleware, EmegencyContactController.updateEmergencyContact);

module.exports = router;
const express = require('express');
const router = express.Router();
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');
const EmegencyContactController = require('./emergency-contact.controller');


const isAuthenticatedMiddleware = passport.authenticate('jwt', {
  session: false
});


router.patch('/users/:userId/updateEmergencyContact', isAuthenticatedMiddleware, EmegencyContactController.updateEmergencyContact);

module.exports = router;
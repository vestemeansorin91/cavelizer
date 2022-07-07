const express = require('express');
const router = express.Router();

const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');
const EmergencyContactController = require('./emergency-contact.controller');

router.patch('/users/:userId/updateEmergencyContact', isAuthenticatedMiddleware, EmergencyContactController.updateEmergencyContact);

module.exports = router;

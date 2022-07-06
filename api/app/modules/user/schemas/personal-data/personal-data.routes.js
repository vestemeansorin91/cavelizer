const express = require('express');
const router = express.Router();

const PersonalDataController = require('./personal-data.controller');
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updatePersonalData', isAuthenticatedMiddleware, PersonalDataController.updatePersonalData);

module.exports = router;

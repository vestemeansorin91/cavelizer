const express = require('express');
const router = express.Router();
const PersonalDataController = require('./personal-data.controller');

const AuthenticatedMiddleware = require('../../../../shared/middlewares/passport/passport.middleware')

router.patch('/users/:userId/updatePersonalData', AuthenticatedMiddleware, PersonalDataController.updatePersonalData);

module.exports = router;

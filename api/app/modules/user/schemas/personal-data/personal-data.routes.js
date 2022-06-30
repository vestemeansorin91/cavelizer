const express = require('express');
const router = express.Router();
const PersonalDataController = require('./personal-data.controller');

const passport = require('passport');
const AuthenticatedMiddleware = passport.authenticate('jwt', {
  session: false
});

router.patch('/users/:userId/updatePersonalData', AuthenticatedMiddleware, PersonalDataController.updatePersonalData);

module.exports = router;

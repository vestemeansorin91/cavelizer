const express = require('express');
const router = express.Router();
const BankDetailsController = require('./bank-details.controller');

const passport = require('passport');
const AuthenticatedMiddleware = passport.authenticate('jwt', {
  session: false
});

router.patch('/users/:userId/updateBankDetails', AuthenticatedMiddleware, BankDetailsController.updateBankDetails);

module.exports = router;

const express = require('express');
const router = express.Router();

const BankDetailsController = require('./bank-details.controller');
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updateBankDetails', isAuthenticatedMiddleware, BankDetailsController.updateBankDetails);

module.exports = router;

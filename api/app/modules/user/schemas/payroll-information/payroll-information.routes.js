const express = require('express');
const router = express.Router();

const PayrollInformationController = require('./payroll-information.controller');
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updatePayrollInformation', isAuthenticatedMiddleware, PayrollInformationController.updatePayrollInformation);

module.exports = router;

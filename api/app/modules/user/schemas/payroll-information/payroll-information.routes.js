const express = require('express');
const router = express.Router();
const PayrollInformationCrontroller = require('./payroll-information.controller');

const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updatePayrollInformation', isAuthenticatedMiddleware, PayrollInformationCrontroller.updatePayrollInformation);

module.exports = router;

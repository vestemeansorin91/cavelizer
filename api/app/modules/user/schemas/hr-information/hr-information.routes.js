const express = require('express');
const router = express.Router();

const HrInformationController = require('./hr-information.controller');
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updateHrInformation', isAuthenticatedMiddleware, HrInformationController.updateHrInformation);

module.exports = router;

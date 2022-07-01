const express = require('express');
const router = express.Router();
const HrInformationController = require('./hr-information.controller');

const AuthenticatedMiddleware = require('../../../../shared/middlewares/passport/passport.middleware');

router.patch('/users/:userId/updateHrInformation', AuthenticatedMiddleware, HrInformationController.updateHrInformation);

module.exports = router;

const express = require('express');
const router = express.Router();

const StartEndDatesController = require('./start-end-dates.controller');
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updateStartEndDates', isAuthenticatedMiddleware, StartEndDatesController.updateStartEndDates);

module.exports = router;

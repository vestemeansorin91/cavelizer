const express = require('express');
const router = express.Router();
const PublicProfileController = require('./public-profile.controller');

const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updatePublicProfile', isAuthenticatedMiddleware, PublicProfileController.updatePublicProfile);

module.exports = router;

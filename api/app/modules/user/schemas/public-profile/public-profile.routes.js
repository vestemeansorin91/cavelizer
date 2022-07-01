const express = require('express');
const router = express.Router();
const PublicProfileController = require('./public-profile.controller');

const AuthenticatedMiddleware = require('../../../../shared/middlewares/passport/passport.middleware')

router.patch('/users/:userId/updatePublicProfile', AuthenticatedMiddleware, PublicProfileController.updatePublicProfile);

module.exports = router;

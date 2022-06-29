const express = require('express');
const router = express.Router();
const PublicProfileController = require('./public-profile.controller');

const passport = require('passport');
const AuthenticatedMiddleware = passport.authenticate('jwt', {
  session: false
});

router.post('/users/:userId/updatePublicProfile', AuthenticatedMiddleware, PublicProfileController.updatePublicProfile);

module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

const AuthenticatedMiddleware = require('../../shared/middlewares/passport/passport.middleware');

// User routes
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.patch('/users/:id/toggleIsActive', AuthenticatedMiddleware, UserController.toggleUserActive);
router.delete('/users/:id', AuthenticatedMiddleware, UserController.deleteUser);

// Nested routes
const publicProfileRoutes = require('./schemas/public-profile/public-profile.routes');
const hrInformationRoutes = require('./schemas/hr-information/hr-information-routes');
const personalDataRoutes = require('./schemas/personal-data/personal-data.routes');

router.use(publicProfileRoutes);
router.use(hrInformationRoutes);
router.use(personalDataRoutes);

module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

const isAuthenticatedMiddleware = require('../../shared/middlewares/is-authenticated.middleware');
const isAdminMiddleware = require('../../shared/middlewares/is-admin.middleware');

// User routes
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.patch('/users/:id/toggleIsActive', isAuthenticatedMiddleware, isAdminMiddleware, UserController.toggleUserActive);
router.delete('/users/:id', isAuthenticatedMiddleware, UserController.deleteUser);

// Nested routes
const publicProfileRoutes = require('./schemas/public-profile/public-profile.routes');
const hrInformationRoutes = require('./schemas/hr-information/hr-information.routes');
const personalDataRoutes = require('./schemas/personal-data/personal-data.routes');
const bankDetailsRoutes = require('./schemas/bank-details/bank-details.routes');

router.use(publicProfileRoutes);
router.use(hrInformationRoutes);
router.use(personalDataRoutes);
router.use(bankDetailsRoutes);

module.exports = router;

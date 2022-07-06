const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

/* Middlewares */
const isAuthenticatedMiddleware = require('../../shared/middlewares/is-authenticated.middleware');
const isAdminMiddleware = require('../../shared/middlewares/is-admin.middleware');
const uploadAvatarMiddleware = require('../../shared/middlewares/upload-avatar.middleware');

// User routes
router.get('/users', UserController.getUsers);
router.get('/users/:id/getUserById', UserController.getUserById);
router.get('/users/:username/getUserByUsername', UserController.getUserByUsername);
router.patch('/users/:id/toggleIsActive', isAuthenticatedMiddleware, isAdminMiddleware, UserController.toggleUserActive);
router.delete('/users/:id', isAuthenticatedMiddleware, UserController.deleteUser);
router.post('/users/:id/uploadAvatar', uploadAvatarMiddleware, UserController.uploadAvatar);

// Nested routes
const publicProfileRoutes = require('./schemas/public-profile/public-profile.routes');
const hrInformationRoutes = require('./schemas/hr-information/hr-information.routes');
const personalDataRoutes = require('./schemas/personal-data/personal-data.routes');
const bankDetailsRoutes = require('./schemas/bank-details/bank-details.routes');
const clothesSizesRoutes = require('./schemas/clothes-sizes/clothes-sizes.routes');
const startEndDates = require('./schemas/start-end-dates/start-end-dates.routes');
const payrollInformationRoutes = require('./schemas/payroll-information/payroll-information.routes');

router.use(publicProfileRoutes);
router.use(hrInformationRoutes);
router.use(personalDataRoutes);
router.use(bankDetailsRoutes);
router.use(clothesSizesRoutes);
router.use(startEndDates);
router.use(payrollInformationRoutes);

module.exports = router;

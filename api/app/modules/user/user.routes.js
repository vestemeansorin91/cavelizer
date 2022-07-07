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
router.get('/users/:id/getUserByIdWithProfile', UserController.getUserByIdWithProfile);
router.get('/users/:username/getUserByUsername', UserController.getUserByUsername);
router.patch('/users/:id/toggleIsActive', isAuthenticatedMiddleware, isAdminMiddleware, UserController.toggleUserActive);
router.delete('/users/:id', isAuthenticatedMiddleware, UserController.deleteUser);
router.post('/users/:id/uploadAvatar', uploadAvatarMiddleware, UserController.uploadAvatar);

// Nested routes
const bankDetailsRoutes = require('./schemas/bank-details/bank-details.routes');
const clothesSizesRoutes = require('./schemas/clothes-sizes/clothes-sizes.routes');
const emergencyContactRoutes = require('./schemas/emergency-contact/emergency-contact.routes');
const hrInformationRoutes = require('./schemas/hr-information/hr-information.routes');
const payrollInformationRoutes = require('./schemas/payroll-information/payroll-information.routes');
const personalDataRoutes = require('./schemas/personal-data/personal-data.routes');
const publicProfileRoutes = require('./schemas/public-profile/public-profile.routes');
const startEndDates = require('./schemas/start-end-dates/start-end-dates.routes');

router.use(bankDetailsRoutes);
router.use(clothesSizesRoutes);
router.use(emergencyContactRoutes);
router.use(hrInformationRoutes);
router.use(payrollInformationRoutes);
router.use(personalDataRoutes);
router.use(publicProfileRoutes);
router.use(startEndDates);

module.exports = router;

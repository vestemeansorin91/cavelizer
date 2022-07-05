const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

const isAuthenticatedMiddleware = require('../../shared/middlewares/is-authenticated.middleware');
const isAdminMiddleware = require('../../shared/middlewares/is-admin.middleware');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
const uploadMiddleware = upload.single('avatar');

// User routes
router.get('/users', UserController.getUsers);
router.get('/users/:id/getUserById', UserController.getUserById);
router.get('/users/:username/getUserByUsername', UserController.getUserByUsername);
router.patch('/users/:id/toggleIsActive', isAuthenticatedMiddleware, isAdminMiddleware, UserController.toggleUserActive);
router.delete('/users/:id', isAuthenticatedMiddleware, UserController.deleteUser);
router.post('/users/:id/uploadAvatar', uploadMiddleware, UserController.uploadAvatar)


// Nested routes
const publicProfileRoutes = require('./schemas/public-profile/public-profile.routes');
const hrInformationRoutes = require('./schemas/hr-information/hr-information.routes');
const personalDataRoutes = require('./schemas/personal-data/personal-data.routes');
const bankDetailsRoutes = require('./schemas/bank-details/bank-details.routes');
const clothesSizesRoutes = require('./schemas/clothes-sizes/clothes-sizes.routes');
const startEndDates = require('./schemas/start-end-dates/start-end-dates.routes');

router.use(publicProfileRoutes);
router.use(hrInformationRoutes);
router.use(personalDataRoutes);
router.use(bankDetailsRoutes);
router.use(clothesSizesRoutes);
router.use(startEndDates);

module.exports = router;

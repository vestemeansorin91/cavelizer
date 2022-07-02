const express = require('express');
const router = express.Router();
const ClothesSizesController = require('./clothes-sizes.controller');

const AuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updateClothesSizes', AuthenticatedMiddleware, ClothesSizesController.updateClothesSizes);

module.exports = router;
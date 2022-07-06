const express = require('express');
const router = express.Router();

const ClothesSizesController = require('./clothes-sizes.controller');
const isAuthenticatedMiddleware = require('../../../../shared/middlewares/is-authenticated.middleware');

router.patch('/users/:userId/updateClothesSizes', isAuthenticatedMiddleware, ClothesSizesController.updateClothesSizes);

module.exports = router;

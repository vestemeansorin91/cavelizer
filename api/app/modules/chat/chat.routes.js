const express = require('express');
const router = express.Router();
const ChatController = require('./chat.controller');

const isAuthenticatedMiddleware = require('../../shared/middlewares/is-authenticated.middleware');
const setUserOnRequest = require('../../shared/middlewares/set-user-on-request.middleware');

router.get('/getUsersForChat', isAuthenticatedMiddleware, setUserOnRequest, ChatController.getUsersForChat);
router.get('/chatMessages/:senderId/:receiverId/getMessages', isAuthenticatedMiddleware, ChatController.getMessages);
router.patch('/receiverMessages/:sender/:receiver/markReceiverMessages', isAuthenticatedMiddleware, setUserOnRequest, ChatController.markReceiverMessages);
router.patch('/markAllMessages', isAuthenticatedMiddleware, ChatController.markAllMessages);
router.post('/chatMessages/:senderId/:receiverId/sendMessage', isAuthenticatedMiddleware, setUserOnRequest, ChatController.sendMessage);

module.exports = router;

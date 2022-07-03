const express = require('express');
const router = express.Router();
const ChatController = require('./chat.controller');

const isAuthenticatedMiddleware = require('../../shared/middlewares/is-authenticated.middleware');

router.get('/chat-messages/:senderId/:receiverId', isAuthenticatedMiddleware, ChatController.getMessages);
router.patch('/receiver-messages/:sender/:receiver', isAuthenticatedMiddleware, ChatController.markReceiverMessages);
router.patch('/mark-all-messages', isAuthenticatedMiddleware, ChatController.markAllMessages);
router.post('/chat-messages/:senderId/:receiverId', isAuthenticatedMiddleware, ChatController.sendMessage);

module.exports = router;
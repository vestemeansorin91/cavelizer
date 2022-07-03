const express = require('express');
const router = express.Router();
const ChatController = require('./chat.controller');

const isAuthenticatedMiddleware = require('../../shared/middlewares/is-authenticated.middleware');
const setUserOnRequest = require('../../shared/middlewares/set-user-on-request.middleware');

router.get('/chat-messages/:senderId/:receiverId', isAuthenticatedMiddleware, ChatController.getMessages);
router.get('/username/:username',isAuthenticatedMiddleware, ChatController.getUserByUsername );
router.patch('/receiver-messages/:sender/:receiver', isAuthenticatedMiddleware, setUserOnRequest, ChatController.markReceiverMessages);
router.patch('/mark-all-messages', isAuthenticatedMiddleware, ChatController.markAllMessages);
router.post('/chat-messages/:senderId/:receiverId', isAuthenticatedMiddleware, setUserOnRequest, ChatController.sendMessage);

module.exports = router;

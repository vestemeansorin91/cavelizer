const { StatusCodes } = require('http-status-codes');

const messagesCollection = require('./schemas/message.schema');
const conversationsCollection = require('./schemas/conversation.schema');
const usersCollection = require('../user/user.schema');

module.exports = {
  getUsersForChat(request, response) {
    getUsersForChatFn(request.user)
      .then(users => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  getMessages(request, response) {
    const { senderId, receiverId } = request.params;
    getMessagesFn(senderId, receiverId)
      .then(conversation => {
        response.write(JSON.stringify(conversation));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  sendMessage(request, response) {
    const { senderId, receiverId } = request.params;

    sendMessageFn(senderId, receiverId, request.body, request.user)
      .then(info => {
        response.write(JSON.stringify({ info }));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  markReceiverMessages(request, response) {
    const { sender, receiver } = request.params;
    markReceiverMessagesFn(sender, receiver)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  markAllMessages(request, response) {
    const sender = request.user.username;

    markAllMessagesFn(sender)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function getUsersForChatFn(user) {
  return usersCollection.find({
    _id: {
      $not: {
        $eq: user._id
      }
    }
  });
}

async function getMessagesFn(senderId, receiverId) {
  const conversation = await conversationsCollection
    .findOne({
      $or: [
        {
          $and: [
            {
              'participants.senderId': senderId
            },
            {
              'participants.receiverId': receiverId
            }
          ]
        },
        {
          $and: [
            {
              'participants.senderId': receiverId
            },
            {
              'participants.receiverId': senderId
            }
          ]
        }
      ]
    })
    .select('_id');

  if (!conversation) {
    // throw new Error(`Conversation not found!`);
    return {
      messages: { message: null }
    };
  }

  return messagesCollection.findOne({
    conversationId: conversation._id
  });
}

async function sendMessageFn(senderId, receiverId, body, user) {
  const conversation = await conversationsCollection.find({
    $or: [
      {
        participants: {
          $elemMatch: {
            senderId,
            receiverId
          }
        }
      },
      {
        participants: {
          $elemMatch: {
            senderId: receiverId,
            receiverId: senderId
          }
        }
      }
    ]
  });

  if (!conversation) {
    throw new Error(`Conversation not found!`);
  }

  console.log(conversation);

  if (conversation.length > 0) {
    const msg = await messagesCollection.findOne({ conversation: conversation[0]._id });
    await _updateChatList(user, receiverId, msg);
    await messagesCollection.update(
      {
        conversationId: conversation[0]._id
      },
      {
        $push: {
          message: {
            senderId: user._id,
            receiverId: receiverId,
            senderName: user.username,
            receiverName: body.receiverName,
            body: body.message
          }
        }
      }
    );
    return { message: 'messagesCollection sent successfully!' };
    // err 'Error occured while you tried to send a message'
  } else {
    const newConversation = new conversationsCollection();
    newConversation.participants.push({
      senderId: user._id,
      receiverId: receiverId
    });

    const saveConversation = await newConversation.save();
    const newMessage = new messagesCollection();
    newMessage.conversationId = saveConversation._id;
    newMessage.sender = user.username;
    newMessage.receiver = body.receiverName;
    newMessage.message.push({
      senderId: user._id,
      receiverId: receiverId,
      senderName: user.username,
      receiverName: body.receiverName,
      body: body.message
    });

    await usersCollection
      .findOneAndUpdate(
        { _id: user._id },
        {
          $push: {
            chats: {
              $each: [
                {
                  receiverId: receiverId,
                  messageId: newMessage._id
                }
              ],
              $position: 0
            }
          }
        }
      )
      .populate('chats');

    await usersCollection
      .findOneAndUpdate(
        { _id: receiverId },
        {
          $push: {
            chats: {
              $each: [
                {
                  receiverId: user._id,
                  messageId: newMessage._id
                }
              ],
              $position: 0
            }
          }
        }
      )
      .populate('chats');

    await newMessage.save();
    return { message: 'messagesCollection sent!' };
    // err 'Error occured while you tried to send a message'
  }
}

async function markReceiverMessagesFn(sender, receiver) {
  const messages = await messagesCollection.aggregate([
    {
      $unwind: '$message'
    },
    {
      $match: {
        $and: [
          {
            'message.senderName': receiver,
            'message.receiverName': sender
          }
        ]
      }
    }
  ]);
  await _markMessagesAsRead(messages);
  return { message: 'Messages marked as read' };
  // err Error occurred while messages marked as read
}

async function markAllMessagesFn(sender) {
  const messages = await messagesCollection.aggregate([
    {
      $match: {
        'message.receiverName': sender
      }
    },
    {
      $unwind: '$message'
    },
    {
      $match: {
        'message.receiverName': sender
      }
    }
  ]);

  await _markMessagesAsRead(messages);
  return { message: 'All messages marked as read' };
  // err 'Error occured while all messages marked as read'
}

/* Private functions */
async function _updateChatList(user, receiverId, msgId) {
  /* */
  await usersCollection
    .findOneAndUpdate(
      {
        _id: user._id
      },
      {
        $pull: {
          chats: {
            receiverId
          }
        }
      }
    )
    .populate('chats');

  /* */
  await usersCollection
    .findOneAndUpdate(
      {
        _id: receiverId
      },
      {
        $pull: {
          chats: {
            receiverId: user._id
          }
        }
      }
    )
    .populate('chats');

  /* */
  await usersCollection
    .findOneAndUpdate(
      {
        _id: user._id
      },
      {
        $push: {
          chats: {
            $each: [
              {
                receiverId,
                messageId: msgId._id
              }
            ],
            $position: 0
          }
        }
      }
    )
    .populate('chats');

  /* */
  await usersCollection
    .findOneAndUpdate(
      {
        _id: receiverId
      },
      {
        $push: {
          chats: {
            $each: [
              {
                receiverId: user._id,
                messageId: msgId._id
              }
            ],
            $position: 0
          }
        }
      }
    )
    .populate('chats');
}

async function _markMessagesAsRead(messages) {
  if (messages.length > 0) {
    await Promise.all(
      messages.map(async msg => {
        await messagesCollection.findOneAndUpdate(
          {
            'message._id': msg.message._id
          },
          {
            $set: {
              'message.$.isRead': true
            }
          }
        );
      })
    );
  }
}

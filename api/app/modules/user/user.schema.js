const mongoose = require('mongoose');
const profileSchema = require('./schemas/profile.schema');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  salt: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  avatarBlobUrl: {
    type: String,
    default: ''
  },
  profile: { type: profileSchema, default: {}, select: false },
  chats: {
    type: [
      {
        receiverId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        messageId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Message'
        }
      }
    ],
    default: [],
    select: false
  },
});

const usersCollection = mongoose.model('User', userSchema);
module.exports = usersCollection;

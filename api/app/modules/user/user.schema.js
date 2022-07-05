const mongoose = require('mongoose');
const GenderEnum = require('../../shared/enums/gender.enum');

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
    required: true
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
  gender: {
    type: String,
    enum: GenderEnum,
    required: true
  },
  avatarBlobUrl: {
    type: String,
    default: ''
  },
  profile: { type: profileSchema, default: {} },
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
  }
});

const usersCollection = mongoose.model('User', userSchema);
module.exports = usersCollection;

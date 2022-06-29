const mongoose = require('mongoose');
const GenderEnum = require('../../shared/enums/gender.enum');

const profileSchema = require('./schemas/profile.schema');

const userSchema = mongoose.Schema({
  username: String,
  fullName: String,
  password: String,
  email: String,
  isActive: {
    type: Boolean
  },
  gender: {
    type: String,
    enum: GenderEnum,
    required: true
  },
  profile: { type: profileSchema, default: {} }
});

const usersCollection = mongoose.model('User', userSchema);
module.exports = usersCollection;

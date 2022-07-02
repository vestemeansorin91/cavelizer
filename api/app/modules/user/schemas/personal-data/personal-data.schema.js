const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  validityIdentityCard: Date,
  children: Number
});

module.exports = personalDataSchema;

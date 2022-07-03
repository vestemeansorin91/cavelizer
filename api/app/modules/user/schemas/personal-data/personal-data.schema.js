const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  houseNumber: Number,
  validityIdentityCard: Date,
  children: Number
});

module.exports = personalDataSchema;

const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  validityIdentityCard: Date
});

module.exports = personalDataSchema;

const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  phoneNumber: String
});

module.exports = personalDataSchema;

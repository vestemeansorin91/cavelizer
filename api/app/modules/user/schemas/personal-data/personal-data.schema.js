const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  zipCode: String
});

module.exports = personalDataSchema;

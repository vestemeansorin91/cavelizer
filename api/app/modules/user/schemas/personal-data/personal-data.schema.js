const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  houseNumber: Number
});

module.exports = personalDataSchema;

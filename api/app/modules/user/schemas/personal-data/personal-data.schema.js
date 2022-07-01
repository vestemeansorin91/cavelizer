const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  children: Number
});

module.exports = personalDataSchema;

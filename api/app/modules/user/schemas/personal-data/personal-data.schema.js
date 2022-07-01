const mongoose = require('mongoose');
const personalDataSchema = mongoose.Schema({
  street: String,
  privateEmail: String
});

module.exports = personalDataSchema;

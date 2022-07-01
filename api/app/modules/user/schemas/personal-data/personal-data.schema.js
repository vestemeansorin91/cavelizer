const mongoose = require("mongoose");
const personalDataSchema = mongoose.Schema({
  street: String,
});

module.exports = personalDataSchema;

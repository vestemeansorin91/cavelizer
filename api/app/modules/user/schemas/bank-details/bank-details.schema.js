const mongoose = require("mongoose");
const bankDetailsSchema = mongoose.Schema({
  iban: String,
  
});

module.exports = bankDetailsSchema;
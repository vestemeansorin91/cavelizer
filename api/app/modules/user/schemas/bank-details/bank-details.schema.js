const mongoose = require("mongoose");
const bankDetailsSchema = mongoose.Schema({
  iban: String,
  bic: String,
});

module.exports = bankDetailsSchema;
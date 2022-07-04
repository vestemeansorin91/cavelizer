const mongoose = require('mongoose');

const startEndDatesSchema = mongoose.Schema({
  hireDate: Date,
  contractEndDate: Date,
  subCompany: String
});

module.exports = startEndDatesSchema;

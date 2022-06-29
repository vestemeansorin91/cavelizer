const mongoose = require('mongoose');
const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  nationality: String
});

module.exports = hrInformationSchema;

const mongoose = require('mongoose');
const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  status: Boolean
});

module.exports = hrInformationSchema;

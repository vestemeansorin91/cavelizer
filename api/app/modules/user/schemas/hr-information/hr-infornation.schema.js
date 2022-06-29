const mongoose = require('mongoose');
const hrInformationSchema = mongoose.Schema({
  birthDate: Date
});

module.exports = hrInformationSchema;

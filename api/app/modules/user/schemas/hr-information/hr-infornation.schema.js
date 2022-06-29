const mongoose = require('mongoose');
const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  weeklyHours: Number
});

module.exports = hrInformationSchema;

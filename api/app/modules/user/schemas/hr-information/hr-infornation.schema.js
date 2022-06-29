const mongoose = require('mongoose');
const GenderEnum = require('../../../../shared/enums');
const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  gender: {
    type: String,
    enum: GenderEnum
  }
});

module.exports = hrInformationSchema;

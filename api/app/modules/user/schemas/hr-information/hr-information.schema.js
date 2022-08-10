const mongoose = require('mongoose');

const EmploymentTypeEnum = require('../../../../shared/enums/employment-type.enum');
const GenderEnum = require('../../../../shared/enums/gender.enum');

const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  employmentType: {
    type: String,
    enum: EmploymentTypeEnum
  },
  status: {
    type: Boolean,
    default: true
  },
  nationality: String,
  weeklyHours: Number,
  gender: {
    type: String,
    enum: GenderEnum
  }
});

module.exports = hrInformationSchema;

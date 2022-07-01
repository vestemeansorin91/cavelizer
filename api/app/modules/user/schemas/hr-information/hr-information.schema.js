const mongoose = require('mongoose');
const EmploymentEnum = require('../../../../shared/enums/employment.enum');
const GenderEnum = require('../../../../shared/enums/gender.enum');

const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  employmentType: {
    type: String,
    enum: EmploymentEnum
  },
  status: Boolean,
  nationality: String,
  weeklyHours: Number,
  gender: {
    type: String,
    enum: GenderEnum
  }
});

module.exports = hrInformationSchema;

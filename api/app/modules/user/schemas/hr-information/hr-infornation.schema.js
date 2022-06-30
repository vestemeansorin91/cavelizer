const mongoose = require('mongoose');
const EmploymentEnum = require('../../../../shared/enums/employment.enum');

const hrInformationSchema = mongoose.Schema({
  birthDate: Date,
  employmentType: {
    type: String,
    enum: EmploymentEnum
  },
  status: Boolean
});

module.exports = hrInformationSchema;

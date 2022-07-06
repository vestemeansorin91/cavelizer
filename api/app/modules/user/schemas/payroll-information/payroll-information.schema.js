const mongoose = require('mongoose');

const salaryEnum = require('../../../../shared/enums/salary.enum');
const HealthInsuranceEnum = require('../../../../shared/enums/health.enum');
const ReligionEnum = require('../../../../shared/enums/religion.enum');
const insurranceEnum = require('../../../../shared/enums/healthInsurrace.enum');
const educationEnum = require('../../../../shared/enums/education.enum');
const payrollInformationSchema = mongoose.Schema({
  
  levelOfEducation: {
    type:String,
    enum:educationEnum
  },

  salaryType: {
    type: String,
    enum: salaryEnum
  },
  typeOfHealthInsurance: {
    type: String,
    enum: HealthInsuranceEnum
  },
  religion: {
    type: String,
    enum: ReligionEnum
  },
  cnp: String,
  healthInsurrance: {
    type: String,
    enum: insurranceEnum
  }
});

module.exports = payrollInformationSchema;
const mongoose = require('mongoose');

const publicProfileSchema = require('./public-profile/public-profile.schema');
const hrInformationSchema = require('./hr-information/hr-information.schema');
const personalDataSchema = require('./personal-data/personal-data.schema');
const bankDetailsSchema = require('./bank-details/bank-details.schema');
const startEndDatesSchema = require('./start-end-dates/start-end-dates.schema');
const clothesSizesSchema = require('./clothes-sizes/clothes-sizes.schema');
const payrollInformationSchema = require('./payroll-information/payroll-information.schema');
const emergencyContactSchema = require('./emergency-contact/emergency-contact.schema');

const ProfileSchema = mongoose.Schema({
  bankDetails: { type: bankDetailsSchema, default: null },
  publicProfile: { type: publicProfileSchema, default: null },
  clothesSizes: { type: clothesSizesSchema, default: null },
  hrInformation: { type: hrInformationSchema, default: null },
  personalData: { type: personalDataSchema, default: null },
  startEndDates: { type: startEndDatesSchema, default: null },
  payrollInformation: { type: payrollInformationSchema, default: null },
  emergencyContact: { type: emergencyContactSchema, default: null }
});

module.exports = ProfileSchema;

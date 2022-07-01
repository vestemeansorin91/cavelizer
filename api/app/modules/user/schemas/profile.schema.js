const mongoose = require('mongoose');
const publicProfileSchema = require('./public-profile/public-profile.schema');
const hrInformationSchema = require('./hr-information/hr-information.schema');
const personalDataSchema = require('./personal-data/personal-data.schema');
const bankDetailsSchema = require('./bank-details/bank-details.schema');

const ProfileSchema = mongoose.Schema({
  publicProfile: publicProfileSchema,
  hrInformation: {
    type: hrInformationSchema,
    default: null
  },
  personalData: {
    type: personalDataSchema,
    default: null
  },
  bankDetails : {
    type:bankDetailsSchema,
    default:null
  }

  // TODO: Alex6665
  // TODO: mihaiFirst
  // TODO: TheRankOne1
});

module.exports = ProfileSchema;

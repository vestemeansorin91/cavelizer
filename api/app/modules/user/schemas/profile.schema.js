const mongoose = require("mongoose");
const publicProfileSchema = require("./public-profile/public-profile.schema");
const hrInformationSchema = require("./hr-information/hr-infornation.schema");

const ProfileSchema = mongoose.Schema({
  publicProfile: publicProfileSchema,
  hrInformation: {
    type: hrInformationSchema,
    default: null,
  },
  // TODO: Alex6665
  // TODO: mihaiFirst
  // TODO: TheRankOne1
});

module.exports = ProfileSchema;

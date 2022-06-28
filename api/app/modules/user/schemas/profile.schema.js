const mongoose = require("mongoose");
const userPublicProfileSchema = require("./public-profile/public-profile.schema");

const ProfileSchema = mongoose.Schema({
  publicProfile: userPublicProfileSchema,
  hrInformation: null,
  // TODO: Alex6665
  // TODO: mihaiFirst
  // TODO: TheRankOne1
});

module.exports = ProfileSchema;

const mongoose = require("mongoose");
const emergencyContactSchema = mongoose.Schema({
  fullName: String,
  phoneNumber: String,
});

module.exports = emergencyContactSchema;
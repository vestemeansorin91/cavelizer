const mongoose = require('mongoose');
const CityEnum = require('../../../../shared/enums/city.enum');

const personalDataSchema = mongoose.Schema({
  street: String,
  phoneNumber: String,
  children: Number,
  city: {
    type: String,
    enum: CityEnum
  },
  validityIdentityCard: Date,
  children: Number
});

module.exports = personalDataSchema;

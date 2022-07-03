const mongoose = require('mongoose');
const CityEnum = require('../../../../shared/enums/city.enum');

const personalDataSchema = mongoose.Schema({
  street: String,
  houseNumber: Number,
  zipCode: String,
  city: {
    type: String,
    enum: CityEnum
  },
  phoneNumber: String,
  privateEmail: String,
  validityIdentityCard: Date,
  children: Number
});

module.exports = personalDataSchema;

const mongoose = require('mongoose');
const CityEnum = require('../../../../shared/enums/city.enum');

const personalDataSchema = mongoose.Schema({
  street: String,
  houseNumber: Number,
  zipCode: String,
  phoneNumber: String,
  children: Number,
  city: {
    type: String,
    enum: CityEnum
  },
  validityIdentityCard: Date
});

module.exports = personalDataSchema;

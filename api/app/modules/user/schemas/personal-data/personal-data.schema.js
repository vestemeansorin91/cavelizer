const mongoose = require('mongoose');
const CityEnum = require('../../../../shared/enums/city.enum');

const personalDataSchema = mongoose.Schema({
  street: String,
  zipCode: String,
  children: Number,
  city: {
    type: String,
    enum: CityEnum
  },
  validityIdentityCard: Date
});

module.exports = personalDataSchema;

const mongoose = require('mongoose');
const CityEnum = require('../../../../shared/enums/city.enum');

const personalDataSchema = mongoose.Schema({
  street: String,
  children: Number,
  city: {
    type: String,
    enum: CityEnum
  }
});

module.exports = personalDataSchema;

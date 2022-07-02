const mongoose = require('mongoose');
const ShirtSizeEnum = require('../../../../shared/enums/shirtSize.enum');

const clothesSizesSchema = mongoose.Schema({
  shirtSize: {
    type: String,
    enum: ShirtSizeEnum
  },
  hipSize: Number,
  footSize: Number
});

module.exports = clothesSizesSchema;

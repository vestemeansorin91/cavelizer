const mongoose = require('mongoose');
const ShirtSizeEnum = require('../../../../shared/enums/shirt-size.enum');

const clothesSizesSchema = mongoose.Schema({
  shirtSize: {
    type: String,
    enum: ShirtSizeEnum
  },
  hipSize: Number,
  footSize: Number
});

module.exports = clothesSizesSchema;

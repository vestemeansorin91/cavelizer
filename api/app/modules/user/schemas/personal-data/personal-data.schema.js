const mongoose = require('mongoose');

const personalDataSchema = mongoose.Schema({
    street: String,
    houseNumber: Number,
    zipCode: String,
    city: String,
    phoneNumber: String,
    privateEmail: String,
    validityIdentityCard: Date,
    children: Number
});

module.exports = personalDataSchema;

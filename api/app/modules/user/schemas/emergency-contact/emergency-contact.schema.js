const mongoose = require("mongoose");
const RelationshipEnum = require("../../../../shared/enums/relationship.enum");

const emergencyContactSchema = mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    relationshipType: {
        type: String,
        enum: RelationshipEnum
    },
});

module.exports = emergencyContactSchema; 
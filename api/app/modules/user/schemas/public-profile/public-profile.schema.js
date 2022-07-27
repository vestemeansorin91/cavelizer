const mongoose = require('mongoose');

const DepartmentEnum = require('../../../../shared/enums/department.enum');
const PositionEnum = require('../../../../shared/enums/position.enum');
const TeamEnum = require('../../../../shared/enums/team.enum');

const publicProfileSchema = mongoose.Schema({
    office: String,
    department: {
        type: String,
        enum: DepartmentEnum
    },
    position: {
        type: String,
        enum: PositionEnum
    },
    team: {
        type: String,
        enum: TeamEnum
    },
    phone: String
});

module.exports = publicProfileSchema;

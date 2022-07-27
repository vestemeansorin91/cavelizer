const mongoose = require('mongoose');

const LevelOfEducationEnum = require('../../../../shared/enums/level-of-education.enum');
const SalaryTypeEnum = require('../../../../shared/enums/salary.enum');
const TypeOfHealthInsuranceEnum = require('../../../../shared/enums/type-of-health-insurance.enum');
const ReligionEnum = require('../../../../shared/enums/religion.enum');

const payrollInformationSchema = mongoose.Schema({
    levelOfEducation: {
        type: String,
        enum: LevelOfEducationEnum
    },
    salaryType: {
        type: String,
        enum: SalaryTypeEnum
    },
    typeOfHealthInsurance: {
        type: String,
        enum: TypeOfHealthInsuranceEnum
    },
    religion: {
        type: String,
        enum: ReligionEnum
    },
    cnp: String,
    healthInsurance: String
});

module.exports = payrollInformationSchema;

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.familyName = validText(data.familyName) ? data.familyName : '';
    data.password = validText(data.password) ? data.password : '';

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name is required";
    }

    if (Validator.isEmpty(data.familyName)) {
        errors.familyName = "Family name is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
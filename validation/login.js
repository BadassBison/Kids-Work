const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.password = validText(data.password) ? data.password : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
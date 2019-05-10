const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSignupInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';

    
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }
    
    if (!Validator.isLength(data.name, { min: 5, max: 20})) {
        errors.name = 'Name must be between 5 and 20 characters';
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    
    if (!Validator.isLength(data.password, { min: 5, max: 20})) {
        errors.password = 'Password must be between 5 and 20 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords much match';
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
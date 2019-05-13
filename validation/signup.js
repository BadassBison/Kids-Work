const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSignupInput(data) {
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.children = typeof data.children === "array" ? data.children : [];
    // data.children = JSON.parse(data.children);

    if (!Validator.isLength(data.firstName, { min: 2, max: 30})) {
        errors.firstName = 'First name must be between 5 and 30 characters';
    }
    
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First name is required';
    }

    if (!Validator.isLength(data.familyName, { min: 2, max: 30})) {
        errors.familyName = 'Family name must be between 5 and 30 characters';
    }
    
    if (Validator.isEmpty(data.familyName)) {
        errors.familyName = 'Family name is required';
    }
    
    if (!Validator.isLength(data.password, { min: 5, max: 20})) {
        errors.password = 'Password must be between 5 and 20 characters';
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords much match';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password required';
    }

    data.children.forEach( (child, i) => {
        if (!Validator.isLength(child.firstName, { min: 2, max: 30 })) {
            errors[`childFirstName-${i}`] = 'First name must be between 5 and 30 characters';
        }

        if (Validator.isEmpty(child.firstName)) {
            errors[`childFirstName-${i}`] = 'First name is required';
        }
        if (!Validator.isLength(child.password, { min: 5, max: 20 })) {
            errors[`childPassword-${i}`] = 'Password must be between 5 and 20 characters';
        }

        if (Validator.isEmpty(child.password)) {
            errors[`childPassword-${i}`] = 'Password is required';
        }

        if (!Validator.equals(child.password, child.password2)) {
            errors[`childPassword2-${i}`] = 'Passwords much match';
        }

        if (Validator.isEmpty(child.password2)) {
            errors[`childPassword2-${i}`] = 'Confirm password required';
        }
    });

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
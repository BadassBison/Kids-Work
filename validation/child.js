const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateChildSignup(child) {
    let errors = {};

    child.firstName = validText(child.firstName) ? child.firstName : "";
    child.password = validText(child.password) ? child.password : "";
    child.password2 = validText(child.password2) ? child.password2 : "";


    if (!Validator.isLength(child.firstName, { min: 2, max: 30 })) {
        errors.firstName = "First name must be between 5 and 30 characters";
    }

    if (Validator.isEmpty(child.firstName)) {
        errors.firstName = "First name is required";
    }
    if (!Validator.isLength(child.password, { min: 5, max: 20 })) {
        errors.password = "Password must be between 5 and 20 characters";
    }

    if (Validator.isEmpty(child.password)) {
        errors.password = "Password is required";
    }

    if (!Validator.equals(child.password, child.password2)) {
        errors.password2 = "Passwords much match";
    }

    if (Validator.isEmpty(child.password2)) {
        errors.password2 = "Confirm password required";
    }

    return {
    errors,
    isValid: Object.keys(errors).length === 0
    };
};

//TODO: DRY up code by using this in signup
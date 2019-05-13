const Validator = require('validator');
const validText = require('./valid-text');

const validateChoreInput = (data) => {
    let errors = {};

    data.title = validText(data.title) ? data.title : "";
    data.body = validText(data.body) ? data.body : "";
    // data.amount = typeof data.amount === "number" ? data.amount : "";

    //checkup here on date validations, and the rest

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is required";
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = "Body is required";
    }

    // if (Validator.isEmpty(data.amount)) {
    //     errors.amount = "Amount is required";
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

module.exports = validateChoreInput;
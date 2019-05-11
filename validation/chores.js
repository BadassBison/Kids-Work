const Validator = require('validator');
const validText = require('./valid-text');

const validateChoreInput = (data) => {
    let errors = {};

    data.title = validText(data.title) ? data.title : "";
    data.body = validText(data.body) ? data.body : "";
    data.title = validText(data.title) ? data.title : "";

    //not sure about this validation, numbers may come in as string from the json object
    data.amount = typeof data.amount === "number" ? data.amount : "";

    if (!Validator.isEmpty(data.title)) {
        errors.title = "Title is required";
    }

    if (!Validator.isEmpty(data.body)) {
        errors.body = "Body is required";
    }

    if (!Validator.isEmpty(data.amount)) {
        errors.amount = "Amount is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

export default validateChoreInput;
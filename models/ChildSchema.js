const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChoreSchema = require('./ChoreSchema');

const ChildSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    chores: [ChoreSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ChildSchema;
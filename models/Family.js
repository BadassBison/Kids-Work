const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChildSchema = require('./Child');

const FamilySchema = new Schema({
    familyName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    children: [ChildSchema],
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Family = mongoose.model('families', FamilySchema);
module.exports = Family;
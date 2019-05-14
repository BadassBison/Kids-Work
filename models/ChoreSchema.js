const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: [0, "Thats messed up"]
    },
    deadline: {
        type: Date
    },
    priority: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["ASSIGNED", "PENDING_REVIEW", "COMPLETED", "FAILED"],
        default: "ASSIGNED"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ChoreSchema;
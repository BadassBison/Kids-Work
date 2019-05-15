const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoreSchema = (type) => {
    let statusDefault = "ASSIGNED";
    // let priorityDefault = false;
    if (type === "unassigned") {
        statusDefault = "UNASSIGNED";
        // priorityDefault = true;
    }

        return new Schema({
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
            enum: ["UNASSIGNED", "CHOSEN", "ASSIGNED", "PENDING_REVIEW", "COMPLETED", "FAILED"],
            default: statusDefault
        },
        statusChangeDate: {
            type: Date,
            default: Date.now
        },
        dateCreated: {
            type: Date,
            default: Date.now
        }
    });
};

module.exports = ChoreSchema;
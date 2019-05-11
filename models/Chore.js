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
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    // child: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    date: {
        type: Date,
        default: Date.now
    }
});

const Chore = mongoose.model('chores', ChoreSchema);

module.exports = Chore;
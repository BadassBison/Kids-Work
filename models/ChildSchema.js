const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChoreSchema = require('./ChoreSchema');
const PaymentSchema = require('./PaymentSchema');

const ChildSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  chores: [ChoreSchema],
  payments: [PaymentSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ChildSchema;
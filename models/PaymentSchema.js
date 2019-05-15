const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    min: [0, "Thats messed up"]
  },
  datePaid: {
    type: Date,
    default: Date.now
  }
});

module.exports = PaymentSchema;

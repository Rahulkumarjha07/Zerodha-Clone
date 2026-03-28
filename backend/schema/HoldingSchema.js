const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: String,
  day: String,
});

module.exports = { HoldingSchema };
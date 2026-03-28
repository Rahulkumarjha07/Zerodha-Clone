const mongoose = require("mongoose");
const { HoldingSchema } = require("../schema/HoldingSchema");

const Holding = mongoose.model("Holding", HoldingSchema);

module.exports = Holding;   
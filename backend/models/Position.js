const mongoose = require("mongoose");
const { PositionSchema } = require("../schema/positionschema");

const Position = mongoose.model("Position", PositionSchema);

module.exports = Position;
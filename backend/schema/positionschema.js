const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      enum: ["CNC", "MIS"],
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 0,
    },

    avg: {
      type: Number,
      required: true,
      min: 0,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// 🔥 Prevent duplicates + improve performance
PositionSchema.index({ userId: 1, name: 1 }, { unique: true });

module.exports = { PositionSchema };
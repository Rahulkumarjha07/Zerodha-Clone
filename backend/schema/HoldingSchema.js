const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema(
  {
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
  {
    timestamps: true,
  }
);

// 🔥 Prevent duplicate holdings
HoldingSchema.index({ userId: 1, name: 1 }, { unique: true });

// ✅ EXPORT MODEL (IMPORTANT)
module.exports = mongoose.model("Holding", HoldingSchema);
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // stock name

    qty: { type: Number, required: true },

    price: { type: Number, required: true },

    // 🔥 restrict values
    mode: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },

    // 🔥 optional but useful
    status: {
      type: String,
      default: "COMPLETED", // future: PENDING
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);



module.exports = { OrderSchema };
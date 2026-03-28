const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  product: { 
    type: String, 
    required: true 
  }, // CNC, MIS, etc.

  name: { 
    type: String, 
    required: true 
  },

  qty: { 
    type: Number, 
    required: true 
  },

  avg: { 
    type: Number, 
    required: true 
  },

  price: { 
    type: Number, 
    required: true 
  },

  net: { 
    type: String 
  }, // "+0.58%"

  day: { 
    type: String 
  }, // "-1.24%"

  isLoss: { 
    type: Boolean, 
    required: true 
  }

}, { timestamps: true });

module.exports = { PositionSchema };
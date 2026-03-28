require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ✅ FIXED IMPORT
const Holding = require("./models/HoldingModel");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

console.log("Mongo URL:", URL);

// ✅ DB CONNECTION
mongoose.connect(URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });




// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("root user");
});

// ✅ SERVER START
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
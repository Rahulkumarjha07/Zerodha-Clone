require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const bodyparser = require("body-parser");


const app = express();

app.use(cors());
app.use(bodyparser.json());


const Holding = require("./models/HoldingModel");

const Position = require("./models/Position");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;



mongoose.connect(URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });

app.get("/holdings", async (req, res) => {
  try {
    const allholdings = await Holding.find({});
    res.json(allholdings);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/positions", async(req, res) => {
    try{
    const allpositions = await Position.find({});

    res.json(allpositions);
    }
    catch(err){
       console.error(err);
    res.status(500).send("Error fetching holdings");
    }

})



app.get("/", (req, res) => {
  res.send("root user");
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
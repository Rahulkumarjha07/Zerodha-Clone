require("dotenv").config();

const mongoose = require("mongoose");

const position = require("./models/Position");

const URL = process.env.MONGO_URL;

const positions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

async function insert(){
    try{
        await mongoose.connect(URL);
        console.log("Db connected succesfully");

        await position.insertMany(positions);

         console.log("Data inserted successfully");
    }
     catch (err) {
    console.error(err);
    process.exit(1);
  }
}

insert();

require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

const URL = process.env.MONGO_URL;

console.log("Mongo URL:", URL);

mongoose.connect(URL).then(()=>{
    console.log("db is connceted");
})
.catch(()=>{
    console.log("db connection failed");
});
app.get("/",(req,res)=>{
    res.send("root user");
});

app.listen(PORT,()=>{
 console.log("app is listening on the port 8080");
});
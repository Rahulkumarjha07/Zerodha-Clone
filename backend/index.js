const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("root user");
});

app.listen(8080,()=>{
 console.log("app is listening on the port 8080");
});
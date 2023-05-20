const express = require("express");
require("../db/conn")
const path = require("path");
port = process.env.PORT || 3000
const app = express();

app.use("view engine" , "hbs")
  

app.get("/", (req, res)=>{
    res.send("hi");
});


app.listen(port);
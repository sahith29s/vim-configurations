const express = require("express");

const conn = require("../DB/conn")

const model = require("../models/model")

port = process.env.PORT || 3000
const app = express();
  

app.get("/", (req, res)=>{
    res.send("");
});


app.listen(port);
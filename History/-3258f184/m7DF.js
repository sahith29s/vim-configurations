const express = require("express");
require("../db/conn")
port = process.env.PORT || 3000
const app = express();
  

app.get("/", (req, res)=>{
    res.send("hi");
});


app.listen(port);
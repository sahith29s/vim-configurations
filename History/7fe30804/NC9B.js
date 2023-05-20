const express = require("express");

const conn = require("../DB/conn")
conn()

const model = require("../models/model")

port = process.env.PORT || 3000
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});


    
model.delete({_id :"6451e04aa237d6e0a96272b9" })

// createDocument()

app.listen(port);
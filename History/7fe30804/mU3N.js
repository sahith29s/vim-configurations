const express = require("express");

const conn = require("../DB/conn")
conn()

const model = require("../models/model")

port = process.env.PORT || 3007
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});


    

model.create({
    name: "rithwick"
})
// createDocument()

app.listen(port);
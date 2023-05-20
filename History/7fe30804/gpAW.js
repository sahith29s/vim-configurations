const express = require("express");

const conn = require("../DB/conn")
conn()

const model = require("../models/model")

port = process.env.PORT || 3000
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});

const createDocument = async () => {
    model.insert({
        name: "sahith",
        class: "11th grade",
        rollNo: "21"
    })
    console.log("sahith");
};



app.listen(port);
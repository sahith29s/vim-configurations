const express = require("express");

const conn = require("../DB/conn")
conn()

const model = require("../models/model")

port = process.env.PORT || 3007
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});



const deleteDocument = async () => {
    try {

        model.remove({name : "sahith"})

    } catch (error) {
        console.log(error);

    }
};

createDocument()

app.listen(port);
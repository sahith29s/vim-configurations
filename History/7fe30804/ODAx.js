const express = require("express");

const conn = require("../DB/conn")
conn()

const model = require("../models/model")

port = process.env.PORT || 3007
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});


    
const deleteDocument = async () =>{
    model.findByIdAndDelete("645214012179214cd1624350")
};

deleteDocument()
// createDocument()

app.listen(port);
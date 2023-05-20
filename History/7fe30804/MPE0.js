const express = require("express");

const conn = require("../DB/conn")
conn()

const model = require("../models/model")

port = process.env.PORT || 3000
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});


app.post("/students" , (req, res)=>{
    
})

// createDocument()

app.listen(port);
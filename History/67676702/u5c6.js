const express = require("express");
const Emp = require("../models/model")
const dbConnect = require("../dbConnect/dbConnect")
dbConnect()

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hi");
});

app.post("/about" , (req , res) =>{
    let newModel = Emp.create({
        empName : "sahith",
        empEmail : "honey.sahith29@gmail.com"
    })
})


app.listen(port, () => {
    console.log(`app running on port port`)
})
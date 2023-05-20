const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/subscribers")

const db =  mongoose.connection
db.on("error" , (error)  =>{
    console.error(error)
})

db.once("open" , () =>{
    console.log("connected to Dtabase ")
})




// app.get("/", (req, res) )

app.listen(3000, () =>{
    console.log("server has started")
})
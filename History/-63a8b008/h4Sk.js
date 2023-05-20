const express = require("express")
const app = express()
const mongoose = require("mongoose")
const validator = require("validator")
const port = process.env.PORT || 3000




app.post("/students", (req, res) =>{
    res.send("hello from the server side")

})


app.listen(port, ()=>{
    console.log(`connection set up ${port}`)
})
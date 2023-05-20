const express = require("express")
require("./db/con")
const Student = require("./models/students")
const app = express()
const mongoose = require("mongoose")
const validator = require("validator")
const port = process.env.PORT || 8000


app.use(express.json())
app.get("/", (req, res) => {
    res.send("This is me ")
})

app.post("/students", (req, res) => {
    res.send("hello from the server side")
    console.log(req.body)
    const user = new Student(req.body)

})


app.listen(port, () => {
    console.log(`connection set up ${port}`)
})
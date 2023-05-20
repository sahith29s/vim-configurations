const express = require("express");
const UserModel = require("./models/user.module")

const mongoose = require("mongoose");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const port = process.env.PORT || 3001;
const app = express();

//connect mongoose
mongoose.connect("mongodb://localhost/codeDamn").then(() =>{console.log("mongoose connected successfully")})



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/", (req, res) => {
    res.send("Hi");
});

app.post("/api/register", async (req, res) => {

    console.log(req.body);
    res.status(201)
})



app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
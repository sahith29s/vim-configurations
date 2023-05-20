const mongoose = require("mongoose");
const express = require("express");
const authRouter = express.Router()

// mongoose connection
require("../mongoose/connectDb/connectDb")()

//models 
const User = require("../mongoose/models/User")

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended : false}))

router.post("", async (req, res)=>{
    User.create({
        name : "sahith",
        password : "password",
        email : "loda"
    })
})


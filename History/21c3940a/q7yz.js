const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

//models 
const User = require("../mongoose/models/User")

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended : false}))

router.post("/api/auth", async (req, res)=>{
    User.create({
        name : "sahith",
        
    })



})


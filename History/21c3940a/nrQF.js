const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended : false}))

router.post("/api/auth", async (req, res)=>{
    


})


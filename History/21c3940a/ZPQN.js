const mongoose = require("mongoose");
const express = require("express");
const authRouter = express.Router()

// mongoose connection
require("../mongoose/connectDb/connectDb")()

//models 
const User = require("../mongoose/models/User")

//middle ware
authRouter.use(express.json())
authRouter.use(express.urlencoded({ extended: false }))

authRouter.post("/", async (req, res) => {
    try {
        
        await User.create({
            name: "sahith",
            password: "password",
            email: "loda"
        })

    }
    catch (error) {

        console.log(error);

    };
})

module.exports = authRouter


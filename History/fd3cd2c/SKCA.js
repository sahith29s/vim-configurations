const asyncHandler = require("express-async-handler")
const 
const jsonwebtoken = require("jsonwebtoken")
const jsonwebtoken = require("jsonwebtoken")
require("../connectDb/connectDb")()
const AmazonSignUpModel = require("../models/signUp.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await AmazonSignUpModel.findOne({ email })

    if (email === user.email, password === user.password) {
        const token = jsonwebtoken.sign({user : _id} , )
        res.cookie(sahith = "sahith")
        res.send('sahith')
    }
})

module.exports = { loginVerification }

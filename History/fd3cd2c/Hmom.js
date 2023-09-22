const asyncHandler = require("express-async-handler")
require("../connectDb/connectDb")()
const AmazonSignUpModel = require("../models/signUp.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await AmazonSignUpModel.find({ email })
    if()
})

module.exports = { loginVerification }

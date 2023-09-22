const asyncHandler = require("express-async-handler")
require("../connectDb/connectDb")()
const AmazonSignUpModel = require("../models/signUp.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(email);

    const user = await AmazonSignUpModel.find({ email })


    console.log(user);
    res.json(user)


})

module.exports = { loginVerification }

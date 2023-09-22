const asyncHandler = require("express-async-handler")
const AmazonProductModel = require("../models/product.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await AmazonProductModel.find({ email })
    console.log(user);
})

module.exports = { loginVerification }

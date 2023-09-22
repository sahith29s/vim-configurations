const asyncHandler = require("express-async-handler")
const AmazonProductModel = require("../models/product.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(email);
    const user = await AmazonProductModel.find({ email })


    console.log(user);
    res.json(user)
    

})

module.exports = { loginVerification }

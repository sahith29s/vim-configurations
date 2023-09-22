const asyncHandler = require("express-async-handler")
require("../connectDb/connectDb")()
const AmazonSignUpModel = require("../models/signUp.model")

const loginVerification = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await AmazonSignUpModel.find({ email })
    console.log(user.email , user.password);
    console.log(email , password);

    // if(email === user.email , password === user.password){
    //     console.log("sahith");
    //     res.send("sahith")
    // }
})

module.exports = { loginVerification }

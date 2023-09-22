const asyncHandler = require("express-async-handler")
const TOKEN_KEY = "ThisIsMeSahith"
const jsonwebtoken = require("jsonwebtoken")
// require("../connectDb/connectDb")()
const AmazonSignUpModel = require("../models/signUp.model")

const loginVerification = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email, password);
        const user = await AmazonSignUpModel.findOne({ email })

        if (email === user.email, password === user.password) {
            let userId = user._id
            const token = jsonwebtoken.sign({ userId }, TOKEN_KEY)
            res.cookie("jwt", token)
            res.json("successful")
        }
        else{
            res.json("unsuccessful")
        }

    }
    catch (error) {
        console.log(error);
        res.send(error)
    };
})

module.exports = { loginVerification }

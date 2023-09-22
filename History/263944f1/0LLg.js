const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: "sahith"
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
})

const AmazonSignUpModel = mongoose.model("amazonSignUp" , signUpSchema)
module.exports = AmazonSignUpModel 
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

const AmazonClone = mongoose.model("" , signUpSchema)
module.exports = AmazonClone 

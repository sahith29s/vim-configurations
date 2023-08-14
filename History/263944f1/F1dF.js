const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
    username: {
        type: string,
        required: true,
        default: "sahith"
    },

    email: {
        type: email,
        unique: true,
        required: true,
    },

    password: {
        type: string,
        required: true,
    }
})

module.exports = mongoose.model("")

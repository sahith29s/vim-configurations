const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    profile: { type: String , default : "" },

})
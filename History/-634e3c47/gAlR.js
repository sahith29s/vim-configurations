const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    tag : {
        type : String,
    },

    date : {
        type : String,
        default : Date.now()
    },

})


module.exports = new mongoose.model("user" , UserSchema)

const mongoose = require("mongoose")

const settingsSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        requierd : true,
    },

    email : { 
        type : String,
        unique : true,
        requierd : true,
    },

    password : {
        type : String, 
        unique : true,
        required : true,
    }
})

module.exports - mongoose.model("Users" ,  )
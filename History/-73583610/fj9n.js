const mongoose = require("mongoose")

const settingsSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        requierd : true,
    },

    email : { 
        type : String,
        trime : true
    }
})
const mongoose = require("mongoose");
const moment = require("moment-timezone")

const noteSchema =  mongoose.Schema({
    title : {
        type : String,
        default : "one"
    },

    description : {
        type : String,
        required : true,
    },

    date : {
        type : String,
        // default : moment.tz(Date.now() , "Asia/kolkata")
        default : new Date().toLocaleTimeString()
    }
})

module.exports = mongoose.model("Note" , noteSchema)
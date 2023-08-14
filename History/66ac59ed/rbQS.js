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
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model("Note" , noteSchema)
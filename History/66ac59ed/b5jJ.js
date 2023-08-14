const mongoose = require("mongoose");

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
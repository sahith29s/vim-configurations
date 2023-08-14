const mongoose = require("mongoose");

const noteSchema =  mongoose.Schema({
    title : {
        type : Number || String
    },

    description : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model("notes" , )
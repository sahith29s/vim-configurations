const mongoose = require("mongoose");
const notes = require("../data/notes");

const noteSchema =  mongoose.Schema({
    title : {
        type : Number || String
    },

    description : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model("notes" , notes)
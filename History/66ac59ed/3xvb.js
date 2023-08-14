const mongoose = require("mongoose");

const noteSchema =  mongoose.Schema({
    title : {
        type : Number || String,
        default : "one"
    },

    description : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model("Note" , noteSchema)
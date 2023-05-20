const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    },

    complete : {
        type : Boolean ,
        default : false
    },

    timeStamp : {
        type : Date,
        default : Date.now()
    }

})

module.exports = new mongoose.model("Todo" , TodoSchema)
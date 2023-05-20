const mongoose = require("mongoose");
const TodoSchema =  new mongoose.Schema({
    text : {
        type : String,
        required : true
    },

    complete : {
        type : Boolean,
        default : false 
    },
    timeStamp {
        type  : String,
        default : Date.now()
    }
})
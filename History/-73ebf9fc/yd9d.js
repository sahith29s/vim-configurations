const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    },

    is-complete : {
        type : true 
    }
})
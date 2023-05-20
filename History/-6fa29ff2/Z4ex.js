const mongoose = require("mongoose");

const MenSchema  = new mongoose.Schema({
    ranking : {
        type : Number,
        required : true,
        unique : true
    },

     
})
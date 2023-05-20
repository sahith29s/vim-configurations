const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
    brandName : {
        type : String, 
        required : true 
    },

    brandIconUrl : {
        type : String,
        required : true
    },

    
})
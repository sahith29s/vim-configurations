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

    links : [
        {
            label : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
        {
            label : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
    ]
})
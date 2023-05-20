const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
    title : {
        type : String ,
        requierd : String
    },
    subTitle : {
        type : String , 
        required : String
    },

    imageUrl : {
        type : String,
        required : True 
    }
})



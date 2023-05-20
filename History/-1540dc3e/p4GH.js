const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema([{
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
}])


module.exports = new mongoose.model("slider", sliderSchema)
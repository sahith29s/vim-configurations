const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({

        title: {
            type: String,
            requierd: true
        },
         
        subTitle: {
            type: String,
            required: true
        },

        imageUrl: {
            type: String,
            required: true
        },

        class : {
            type : String
        }
})


module.exports = new mongoose.model("slider", sliderSchema)
const mongoose = require("mongoose")

const ServicesSchema = new mongoose.Schema({
    icon :{
        type : String,
        required : true
    },

    title :{
        type : String,
        requierd : true
    }, 

    description : {
        type : String,
        required : true
    },

    
    linkText : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },


})

    
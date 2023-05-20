const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    
    username : {
        required : true, 
        type : String
    },

    email : {
        required : true,
        type : String
    },

    message : {
        required : true, 
        type : String
    }
})


const contactModel = new mongoose.model("feedback" , contactSchema)

module.exports = contactModel
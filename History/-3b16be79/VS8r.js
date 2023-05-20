const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        requied : true
    },
    email : {
        type : String,
        requied : true,
        unique : true
    },
    subject : {
        type : String,
        requied : true
    },

    message : {
        type : String,
    }
    
})

module.exports = 
const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
    username : {
        type: string,
        required : true,
        default : "sahith"
    },

    email : {
        type : email,
        unique : true,
        required : true,
    },

    pass



    
})

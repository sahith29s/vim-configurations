const mongoose = require("mongoose");

const MenSchema  = new mongoose.Schema({
    ranking : {
        type : Number,
        required : true,
        unique : true
    },

    name : {
        type : String, 
        trim : true
    },

    dob :  {
        type : Date,
        trim : true
    },

    country : {
        type :String,
        trim : true
    },

    score : {
        type : Number,
        trim : true

    },
    event : {
        type : String,
        trim : true, 
        default : "100mts"

    }
})

const MensRanking = new mongoose.model("MenRanking" , MenSchema)


module.exports = MensRanking
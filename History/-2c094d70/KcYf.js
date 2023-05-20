const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    feature : {
        type : Boolean,
        default  : false
    },

    rating : {
        type : Number,
        default : 4.9
    },

    createdAt : {
        type : Date,
        default : Date.now()
    },

    company : {
        type : String,
        enum : {
            values : ["apple" , "samsung", "dell" , "mi"],
            message : `${value} is not supposed`
        }
    }

})


module.exports = new mongoose.model("Product" , )
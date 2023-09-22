const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id : {
        type : String,
    },
    title : {
        type : String,
    },

    money : {
        type : Number,
    },

    image : {
        type : String,
    },

    



})
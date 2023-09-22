const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id : {
        type : String,
    },

    money : {
        type : Number,
        
    }

})
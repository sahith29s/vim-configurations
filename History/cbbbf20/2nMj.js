const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id: {
        type: String | Number,
    },
    title: {
        type: String,
    },

    money: {
        type: Number | String   ,
    },

    image: {
        type: String,
    },
})

const ProductModel = mongoose.model("Product" , ProductSchema)

module.exports = ProductModel
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },

    money: {
        type: Number,
    },

    image: {
        type: String,
    },
})

const ProductModel = mongoose.model("Product" , ProductSchema)

module.exports = ProductModel
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
    },

    money: {
        type: String,
    },

    image: {
        type: String,
    },
})

const ProductModel = mongoose.model("Product" , ProductSchema)

module.exports = ProductModel
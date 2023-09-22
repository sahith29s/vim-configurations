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

const AmazonProductModel = mongoose.model("amazonProduct" , ProductSchema)

module.exports = AmazonProductModel
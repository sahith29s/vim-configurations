const ProductModel = require("../models/product.model")
require("../connectDb/connectDb")()
const asyncHandler = require("express-async-handler")
const createProduct = asyncHandler(async (req, res) => {
    const { id, title, money, image } = req.body
    const createdProduct = ProductModel.create({
        id: id, title: title, money: money, image: image
    })
    console.log(createProduct);
    res.json(createProduct)
})

module.exports = { createProduct }
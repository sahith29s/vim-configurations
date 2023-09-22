const ProductModel = require("../models/product.model")
require("../connectDb/connectDb")()
const asyncHandler = require("express-async-handler")

const createProduct = async (req, res) => {
    // res.send("sahith")
    const { id, title, money, image } = req.body
    const createdProduct = await ProductModel.create({
        id: id, title: title, money: money, image: image
    })
    // console.log(createProduct);
    res.json(createdProduct)
}

module.exports = { createProduct }
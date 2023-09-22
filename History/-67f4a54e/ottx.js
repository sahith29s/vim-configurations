const ProductModel = require("../models/product.model")
require("../connectDb/connectDb")()
const asyncHandler = require("express-async-handler")
const createProduct = asyncHandler(async (req, res) => {
    
    const createdProduct = ProductModel.create({


    })
})

module.exports = { createProduct }
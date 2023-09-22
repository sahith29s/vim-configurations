const ProductModel = require("../models/product.model")
require("../connectDb/connectDb")()
const asyncHandler = require("express-async-handler")
const createProduct = asyncHandler(async (req, res) => {
    
})

module.exports = { createProduct }
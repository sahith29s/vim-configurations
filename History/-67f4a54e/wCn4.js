const amazonProductModel = require("../models/product.model")
require("../connectDb/connectDb")()
const asyncHandler = require("express-async-handler")

const createProduct = asyncHandler(async (req, res) => {
    // res.send("sahith")
    const { id, title, money, image } = req.body
    const createdProduct = await amazonProductModel.create({
        id: id, title: title, money: money, image: image
    })
    // console.log(createProduct);
    res.json(createdProduct)
})

const getAllProducts = asyncHandler( async(req, res)=>{
    const allProducts = await amazonProductModel.find()
    res.json(allProducts)
})

const deleteSingleProduct = asyncHandler( async(req, res) =>{
    const {id} = req.body
    const deletedProduct = await amazonProductModel.deleteOne({id : id})
    res.json(deletedProduct)
})

module.exports = { createProduct , getAllProducts , deleteSingleProduct }
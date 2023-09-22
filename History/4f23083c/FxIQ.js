const express = require("express")
const router = express.Router()
const {createProduct , getAllProducts , deleteSingleProduct} = require("../controllers/product.controller")

// this is router is create a product in database
router.post("/" , createProduct )

// this is route  is to get all the product from database
router.get("/" , getAllProducts)

// this is route is to delete 
router.delete("/" , deleteSingleProduct)

module.exports = router
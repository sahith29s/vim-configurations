const express = require("express")
const router = express.Router()
const {createProduct , getAllProducts} = require("../controllers/product.controller")

this is router is create a product 
router.post("/" , createProduct )
router.get("/" , getAllProducts)

module.exports = router
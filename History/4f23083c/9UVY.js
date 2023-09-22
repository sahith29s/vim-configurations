const express = require("express")
const router = express.Router()
const {createProduct} = require("../controllers/product.controller")

router.get("/" , createProduct)

module.exports = router
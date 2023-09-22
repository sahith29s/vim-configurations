const express = require("express")
const router = express.Router()
const {createProduct} = require("../controllers/product.controller")

router.post("/" , createProduct)
router.get("/" , )

module.exports = router
const express = require("express")
const router = express.Router()
const {createProduct , getAllProducts} = require("../controllers/product.controller")

router.post("/" , createProduct )
router.get("/" , getAllProducts)

module.exports = router
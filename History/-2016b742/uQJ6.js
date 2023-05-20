const {getAllProducts, getAllProductsTesting} = require("../controllers/products")
const express = require('express')

const router = express.Router()

router.get("/" , getAllProducts)

router.get("/testing" ,getAllProductsTesting)

module.exports = router
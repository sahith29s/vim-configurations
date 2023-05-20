const express =  require("express")
const router = express.router()
const {getallproducts, getallproductstesting} = require("../controllers/products")

router.route("/").get(getallproducts)
router.route("/testing").get(getallproductstesting)

module.exports = router
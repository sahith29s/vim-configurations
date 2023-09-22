const express = require("express")


const router = express.Router()

const {signp} =   require("../controllers/userControllers")

router.post("/signup" , signup )

module.exports = router
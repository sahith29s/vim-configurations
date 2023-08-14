const express = require("express");
const {signuppostcontroller} = require("../controllers")
const router = express.Router()

router.post("/" , signuppostcontroller)

module.exports = router
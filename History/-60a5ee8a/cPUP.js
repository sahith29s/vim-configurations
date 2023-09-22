const express = require("express")
const router = express.Router()
const { loginVerification } = require("../controllers/login.controller")

router.post("/", loginVerification)

module.exports = router
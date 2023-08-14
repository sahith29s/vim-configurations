const express = require("express");
const { signUpPostController } = require("../controllers/signUp.controller")
const router = express.Router()

router.post("/", signUpPostController)

module.exports = router
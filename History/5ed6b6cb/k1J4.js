const express = require("express");
const { signUpPostController } = require("../controllers/signUp.controller")
const router = express.Router()

router.post("/", signUpPostController)
router.get("/")

module.exports = router
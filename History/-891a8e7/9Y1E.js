const express = require("express")
const { registerUser } = require("../controllers/userController")

const router = express.Router()

router.post("/", registerUser)
// router.post("/login" , loginUser)


module.exports = userController



const express = require("express")
const 

const router = express.Router()

router.route("/").post(registerUser)
router.route
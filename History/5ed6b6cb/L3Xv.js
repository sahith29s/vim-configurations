const express = require("express");
const { signUpPostController, signUpGetController, signUpPatchController, signUpDeleteController } = require("../controllers/signUp.controller")

const router = express.Router()

router.get("/", signUpGetController)
router.post("/", signUpPostController)
router.patch("/", signUpPatchController)
router.delete("/", signUpDeleteController)

module.exports = router
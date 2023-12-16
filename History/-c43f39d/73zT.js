const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/userController");

// router.post("/signup" , (req , res) => {res.send("sahith")});
router.route("/signup").post(signup);

module.exports = router;
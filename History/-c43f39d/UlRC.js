const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/userController");

router.post("/signup" , (req , res) => {res.send("sahith")});

module.exports = router;
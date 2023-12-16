const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/userController");

router.get("/signup", (req , res) => {res.send("sahith")});

module.exports = router;
const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");


router.post("/", (req, res) => {res.send("sahith")});

module.exports = router;

const express = require("express");
const router = express.Router();
const {createUser} = require("../controllers/userController")



console.log(createUser);
router.post("/", (req, res) => {res.send("sahith")});

module.exports = router;

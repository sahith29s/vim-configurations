const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController")

// console.log(createUser);
// router.post("/", (req, res) => { res.send("sahith") });
router.post("/" , createUser);


module.exports = router;

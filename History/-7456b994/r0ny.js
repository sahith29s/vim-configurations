const express = require("express");
const { registerUser  } = require("../controllers/userControllers");

const router = express.Router(registerUser);

// router.route("/").post();
// router.route("/").get((req ,res) =>{ res.json("sahith")})
router.get("/" , (req, res)=>{ res.json("sahith")})

module.exports = router
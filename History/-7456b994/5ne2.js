const express = require("express");
const { registerUser, authUser  } = require("../controllers/userControllers");

const router = express.Router(registerUser);

router.route("/").post(registerUser);
router.route("/login").post(authUser)
// router.route("/").get((req ,res) =>{ res.json("sahith")})
// router.get("/" , (req, res)=>{ res.json("sahith")})

module.exports = router
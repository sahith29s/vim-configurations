const express = require("express");
const { signup } = require("../controllers/userController");
const router = express.Router();

// router.get("/", (req, res, next) => {
//     res.send("Sahith")
// })

router.post("/signup", signup);

module.exports = router;
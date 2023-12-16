const express = require("express");
const { signup , login } = require("../controllers/userController");
const router = express.Router();

// router.get("/", (req, res, next) => {
//     res.send("Sahith")
// })

router.post("/signup", signup);
router.post("/login", login);
// router.post("/login", (req , res) =>{
//     res.send("sahith")
// });

module.exports = router;
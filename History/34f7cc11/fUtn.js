const express = require("express");
const { signup , login, verifyToken, getUser } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user" , verifyToken , getUser)

module.exports = router;
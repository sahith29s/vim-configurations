const express = require("express");
const { registerUser, authUser ,allUsers  } = require("../controllers/userControllers");

const router = express.Router(registerUser);

router.route("/").post(registerUser);
router.route("/login").post(authUser)
router.route("/").get(allUsers)


module.exports = router
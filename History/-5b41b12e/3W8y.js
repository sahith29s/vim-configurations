const express = require("express");
const router = express.Router()
const {noteMaking} = require("../controllers/notesController")

router.post("/" , noteMaking)

module.exports = router
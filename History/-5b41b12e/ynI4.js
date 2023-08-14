const express = require("express");
const router = express.Router()
const {noteMaking} = require("../controllers/notesController")

// router.post("/" , noteMaking)
router.post("/" , (req, res) =>{
    res.json({"message" : "sahith in this"})
})


module.exports = router
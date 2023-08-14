const express = require("express");
const router = express.Router()
const {noteMaking , getNotes , deleteNote, patchNote} = require("../controllers/notesController")

router.post("/" , noteMaking)
router.get("/" , getNotes)
router.delete("/" , deleteNote)
router.patch("/" , patchNote)
// router.post("/" , (req, res) =>{
//     res.json({"message" : "sahith in this"})
// })


module.exports = router
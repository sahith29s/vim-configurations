const express = require("express")
const router = express.Router()

//Getting all
router.get("/", (req, res) =>{
    res.send("hello world")

})

// Getting one
router.get("/:id" , (req, res) =>{

})

// Updating One 
router.patch("/:id" , (req, res) =>{

})


// Deleting 

router.delete("/" , (req, res) =>{

})

module.exports = router 
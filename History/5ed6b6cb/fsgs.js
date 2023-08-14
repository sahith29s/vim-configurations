const express = require("express");
const router = express.Router()

router.get("/" , (req, res) =>{
    res.send("sahith")
})

module.export = router
const express = require("express");
const router = express.Router()

router.post("/", (req, res) => {
    const body = req.body
    console.log("sahith");
})

module.exports = router
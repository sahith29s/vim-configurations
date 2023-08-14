const express = require("express");
const router = express.Router()

router.post("/", (req, res) => {
    const body1 = req.body.name
    console.log(body1);
    res.send(body1)
})

module.exports = router
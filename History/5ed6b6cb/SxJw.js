const express = require("express");
const router = express.Router()

router.post("/", async (req, res) => {
    const body1 = req.body
    console.log(body1.name);
    res.send(body1)
})

module.exports = router
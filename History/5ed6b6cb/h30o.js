const express = require("express");
const router = express.Router()

router.post("/", async (req, res) => {
    const body1 = await req.body
    console.log(body1);
    res.send(body1)
})

module.exports = router
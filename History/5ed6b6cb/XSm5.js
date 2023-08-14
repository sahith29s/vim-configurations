const express = require("express");
const router = express.Router()

router.post("/:id", async (req, res) => {
    console.log(req.body);
    // res.send(body1)
})

module.exports = router
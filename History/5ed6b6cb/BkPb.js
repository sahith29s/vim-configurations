const express = require("express");
const router = express.Router()

router.post("/:id", async (req, res) => {
    const {id} =  req.params
    console.log(req.body);
    console.log(id);
    // res.send(body1)
})

module.exports = router
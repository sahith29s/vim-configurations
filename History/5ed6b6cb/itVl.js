const express = require("express");
const router = express.Router()

router.post("/:id", async (req, res) => {
    const {body1} = req.body
    const {id} =  req.params
    console.log(body1);
    console.log(id);
    // res.send(body1)
})

module.exports = router
const express = require("express");
const {signUp}
const router = express.Router()

router.post("/:id", async (req, res) => {
    const body1 = req.body
    const {id} =  req.params
    console.log(body1);
    console.log(id);
})

module.exports = router
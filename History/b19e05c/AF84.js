const asyncHandler = require("express-async-handler")
const user = require("../model/userModel")

const userController = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = await req.body

    const userExists  = await User.findOne({email})

    if(userExists)




    res.json({
        name,
        email
    })

})

module.exports = userController
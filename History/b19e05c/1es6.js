const asyncHandler = require("express-async-handler")
const user = require("../model/userModel")

const userController = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = await req.body

    const userExists  = await User.findOne({email})

    if(userExists){
        res.status(400);
        throw new Error("User already Exists")
    }
    else{
        const user = await User
    }

    




    res.json({
        name,
        email
    })

})

module.exports = userController
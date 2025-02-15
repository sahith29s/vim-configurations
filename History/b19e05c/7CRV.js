const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")

const userController = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = await req.body

    const userExists  = await User.findOne({email})

    if(userExists){
        res.status(400);
        throw new Error("User already Exists")
    }
    else{
        const user = await User.create({
            name,
            email,
            password,
            pic
        })

        if(user){
            res.status(201).json({
                _id : user._id,
                name :user.name,
                email : user.email,
                is

            })
        }

    }

    




    res.json({
        name,
        email
    })

})

module.exports = userController
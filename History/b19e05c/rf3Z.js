const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = await req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400);
        // throw new Error("User already Exists")
        res.json("User already exists")
    }
    else {
        const user = await User.create({
            name,
            email,
            password,
            pic
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic
                
            })
        }

        else {
            res.status(400);
            throw new Error("Error occured!")
        }

    }

    res.json({
        name,
        email
    })

})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json("sahith")
    }

    else {
        res.status(400)
        res.json("auth unsuccessful")
    }

})

module.exports = { registerUser, authUser }
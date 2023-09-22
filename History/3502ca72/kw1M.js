const asyncHandler = require("express-async-handler")
const User = require("../model/UserModel")
const generateToken = require("../config/generateToken")


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("chuitye sare fields enter kr na")
        // res.json("chutiye sare fields enter kr na")
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("Kitne barr register karega re chutiye")
        // res.json("Kitne barr register karega re chutiye");
    }

    const user = await User.create({ name, email, password, pic })


    if (user) {
        const { _id, name, email, pic } = user
        res.status(201)
        res.json({ _id, name, email, pic, token: generateToken(user._id) })
    }

    else {
        res.status(400)
        throw new Error("Failed to create a user")
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.find({ email })

    if (user && (await User.matchPassword(password))){
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
        })
    }

})

module.exports = { registerUser , authUser }
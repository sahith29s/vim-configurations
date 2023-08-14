const AmazonClone = require("../models/signUp.model")
const asyncHandler = require("express-async-handler")

const signUpPostController = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    const createdUser = await AmazonClone.create({ username, email, password })
    res.send(createdUser)
    console.log(createdUser);
})

const signUpGetController = asynchandler(async (req, res) => {
    const allData = await AmazonClone.find()
    console.log(allData);
    res.json(allData)
})
const signUpPatchController = asynchandler(async (req, res) => {
    const { _id } = req.body
    const updatedData = await AmazonClone.updateOne({ _id }, { name: "boy" })
    res.send(updatedData)
    console.log(updatedData);
})

module.exports = { signUpPostController, signUpGetController }
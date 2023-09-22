// importing model
const AmazonSignUpModel = require("../models/signUp.model")
const asyncHandler = require("express-async-handler")


const signUpPostController = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    const createdUser = await AmazonSignUpModel.create({ username, email, password })
    res.send(createdUser)
    console.log("posts");
})

const signUpGetController = asyncHandler(async (req, res) => {
    const allData = await AmazonSignUpModel.find()
    res.json(allData)
})

const signUpPatchController = asyncHandler(async (req, res) => {
    const { _id , username} = req.body
    const updatedData = await AmazonSignUpModel.updateOne({ _id }, { username })
    res.send(updatedData)
    console.log(updatedData);
})

const signUpDeleteController = asyncHandler(async (req, res) =>{
    const {_id} = req.body
    const deletedData = await AmazonSignUpModel.deleteOne({_id})
    console.log(deletedData);
    res.send(deletedData)
})

module.exports = { signUpPostController, signUpGetController , signUpPatchController , signUpDeleteController }
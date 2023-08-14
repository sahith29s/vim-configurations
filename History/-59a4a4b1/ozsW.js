const AmazonClone = require("../models/signUp.model")
const signUpPostController = (req, res) => {
    const {username , email , password } = req.body
    const createdUser = AmazonClone.create({})
};

module.exports = { signUpPostController }
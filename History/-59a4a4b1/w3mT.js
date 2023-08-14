const AmazonClone =  require("../models/signUp.model")

const signUpPostController = async (req, res) => {
    const { username, email, password } = req.body
    const createdUser = await AmazonClone.create({ username, email, password })
    res.send(createdUser)
    console.log(createdUser);
};

module.exports = { signUpPostController }
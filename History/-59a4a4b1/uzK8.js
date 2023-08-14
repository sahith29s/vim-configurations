const AmazonClone = require("../models/signUp.model")
const signUpPostController = (req, res) => {
    const {username , email , password } = req.body
    
};

module.exports = { signUpPostController }
const jsonwebtoken = require("jsonwebtoken")

const authFunction = (req, res , next) =>{
    const token = req.cookies["jwt"]
    console.log(token);
    next()
    
}

module.exports = authFunction
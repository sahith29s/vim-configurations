const jsonwebtoken = require("jsonwebtoken")

const authFunction = (req, res) =>{
    const token = req.cookies["jwt"]
    console.log(token);

}

module.exports = authFunction
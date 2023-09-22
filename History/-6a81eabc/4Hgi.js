const jsonwebtoken = require("jsonwebtoken")

const authFunction = (req, res , next) =>{
    const token = req.cookies["jwt"]
    
    res.send("fuck")
    
}

module.exports = authFunction
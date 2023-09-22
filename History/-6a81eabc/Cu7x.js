const jsonwebtoken = require("jsonwebtoken")

const authFunction = (req, res , next) =>{
    const token = req.cookies["jwt"]
    
    if(!token){
        
    }
    
}

module.exports = authFunction
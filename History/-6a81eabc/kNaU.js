const jsonwebtoken = require("jsonwebtoken")

const authFunction = (req, res , next) =>{
    const token = req.cookies["jwt"]
    
    if(!token){
        res.send("token not found")
    } 
    else{
        res.send("token found")
    }

    
    
}

module.exports = authFunction
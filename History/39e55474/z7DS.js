const {verify} = require("jsonwebtoken")
const isAuth = (req) =>{
    const authorization = req.header['authorization']
    if(!authorization) throw new Error("You need to login")

    const token = authorization.split(" ")[1]
    
}
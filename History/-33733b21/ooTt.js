const jwt = require("jsonwebtoken");


const getJwtToken = (userId) =>{
    return jwt.sign({userId} , process.env.SECRET )
}
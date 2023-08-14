const { sign } = require("jsonwebtoken")

const createAccessToken = (userId) =>{
    return sign( "userId", process.env.ACCESS_TOKEN_SECRET)
}
const { sign } = require("jsonwebtoken")

const createAccessToken = (userId) => {
    return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m"
    })
}
const createRefreshToken = (userId) => {
    return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    })
}

const sendAccessToken = (res, req , accessToken) =>{
    const {email} = req.body
    res.send({
        accessToken,
        // email : req.body.email
        email
    })
}

const sendRefreshToken = (res, refreshToken ) =>{
    res.cookie("refreshToken" , refreshToken, {
        httpOnly : true,
        path : "/refresh_token"
    })
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}
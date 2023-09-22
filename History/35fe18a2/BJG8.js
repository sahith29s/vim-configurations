const getJwtToken = require("../helpers/getJwtToken")

const cookieToken = (user , res) =>{
    const token = getJwtToken(user.id)
    const options = {
        expires : new Data(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly : true,
    }
    user.password = undefined
    res.("token" , token , options)
    res.json({success : true , token , user})
}

module.exports = cookieToken;
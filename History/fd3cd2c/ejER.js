const asyncHandler = require("express-async-handler")
const 

const loginVerification = asyncHandler(async (req, res) => {
    const {email , password} = req.body
})

module.exports = {loginVerification}

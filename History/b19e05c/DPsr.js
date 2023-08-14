const async
const user = require("../model/userModel")


const userController = async (req, res) => {
    const { name, email, password, pic } = await req.body




    res.json({
        name,
        email
    })

}

module.exports = userController
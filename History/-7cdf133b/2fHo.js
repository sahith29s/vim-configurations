// bring in prisma and cookie

const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")

//user signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            throw new Error("please give submit all the details")
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        cookieToken(user, res)

    } catch (error) {
        res.send(error)
    }


}
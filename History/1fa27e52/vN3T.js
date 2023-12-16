const prisma = require("../prisma/index");

const cookieToken = require("../utils/cookieToken");

exports.signup = async (req, res) => {
    try {
        const {name , email , password} = req.body;
        if (!name || !email || !password) {
            throw new Error("Enter all the details");
        }
        const user = await prisma.user.create({
            data : {
                name,
                email,
                password,
            }
        });
        // Send User a token
        cookieToken(user , res);

    }
    catch (error) {
        console.log(error);
        // res.send(error)
        throw new Error(error)
    };
}

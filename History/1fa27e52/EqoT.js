const prisma = require("../prisma/index");

const cookieToken = require("../utils/cookieToken");

exports.signup = async (req, res) => {
    try {
        const {name , email , password} = req.body;
        if (!name || !email || !password) {
            throw new Error("Enter all the details");
        }
        
    }
    catch (error) {
        console.log(error);
        // res.send(error)
        throw new Error(error)
    };
}

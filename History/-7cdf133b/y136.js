// bring in prisma and cookie

const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")

//user signup
exports.signp = async (req , res) =>{
    try {
        
        const {name , email , password} = req.body

        
    } catch (error) {
        throw new Error(error)
        
    }


}
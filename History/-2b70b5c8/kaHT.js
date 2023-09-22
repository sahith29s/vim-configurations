const UserModel = require("../../models/erpModels/User")
const mongoose = require("mongoose")


const signup = async (req, res) =>{
    const {name , password , email} = req.body

    const createdUser = UserModel.create({
        name, 
        email,
        password
    })
    res.json(createdUser)
};

const login =async (req, res) =>{
    const {name , password , email}  = req.body
};

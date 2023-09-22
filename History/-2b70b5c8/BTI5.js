const UserModel = require("../../models/erpModels/User")
const mongoose = require("mongoose")


exports.signup = async (req, res) => {
    try {

        const { name, password, email } = req.body
        const createdUser = UserModel.create({
            name,
            email,
            password
        })
        res.json(createdUser)

    } catch (error) {
        return res.status(201).json({ error })
    }
};

exports.userLogin = async (req, res) => {
    const { name, password, email } = req.body
};

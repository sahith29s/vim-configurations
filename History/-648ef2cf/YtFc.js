// const { json } = require("express")
const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({ id })
}
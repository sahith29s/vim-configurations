const mongoose = require("mongoose")
const { model } = require("mongoose")

const connectDB = async (uri) =>{
    console.log("first")
    return mongoose.connect(uri)
}



module.exports = connectDB
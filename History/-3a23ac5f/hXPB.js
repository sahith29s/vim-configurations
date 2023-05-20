const mongoose = require("express")
const { model } = require("mongoose")
uri = "mongodb+srv://sahith:1RBxrfEc5ERgyaC6@cluster0.es2zgpk.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = async () =>{
    return mongoose.connect(uri)
}


module.exports = connectDB
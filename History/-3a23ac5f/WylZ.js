const mongoose = require("express")
uri = "mongodb+srv://sahith:1RBxrfEc5ERgyaC6@cluster0.es2zgpk.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () =>{
    return mongoose.connect(uri)
}
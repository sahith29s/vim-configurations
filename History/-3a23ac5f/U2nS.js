const mongoose = require("express")
uri = "mongodb+srv://sahith:<password>@cluster0.es2zgpk.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () =>{
    return mongoose.connect(uri)
}
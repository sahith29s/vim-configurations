const mongoose = require("mongoose");

const connectDb = async () =>{
    await mongoose.connect("mongodb+srv://sahith:sahith@sahith.xwf0hjs.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected successfully");
};

module.exports = connectDb

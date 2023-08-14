const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/noteZipper")
        console.log("connected successfully");
    } catch (error) {
        console.log(error);
    }

}

module.exports =  connectDb
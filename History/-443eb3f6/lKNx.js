const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sahith29:sahith@cluster0.yha3hi0.mongodb.net/advancedAuth?retryWrites=true&w=majority");
        console.log("connected successfully");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
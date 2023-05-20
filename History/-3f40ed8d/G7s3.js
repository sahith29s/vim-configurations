const mongoose = require("mongoose");

const mongooseStart = async () => {
    try {

        await mongoose.connect("mongodb://localhost:27017/olymics")
        console.log("mongodb Successfully connected");
    } catch (error) {
        console.log(error);
    }
};

mongooseStart()
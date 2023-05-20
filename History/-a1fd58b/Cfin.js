const mongoose = require("mongoose")

const start = async () => {
    const result = await mongoose.connect("mongodb://localhost:27017/sahithDynamic")
    console.log("lsjf");
    console.log(result)
};


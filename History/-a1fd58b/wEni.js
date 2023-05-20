const mongoose = require("mongoose")

const start = async () => {
    const result = mongoose.connect("mongodb://localhost:27017/sahithDynamic")
    console.log(result)
};


start()
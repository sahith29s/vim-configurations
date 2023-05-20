const mongoose = require("mongoose");


const startMongoose = async () =>{
    await mongoose.connect("mongodb://localhost:27017/contactForm")
    console.log("mongoose connected");
};


module.exports = startMongoose
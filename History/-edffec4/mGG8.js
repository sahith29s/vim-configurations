const mongoose = require("mongoose");


const startMongoose = async () =>{
    mongoose.connect("mongodb://localhost:27017/contactForm")
};
const mongoose = require("mongoose");


const connectMongoose = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/normalWebsite');
        console.log("connected successfully");

    }
    catch (error) {

        console.log(error);

    };

};




module.exports = connectMongoose
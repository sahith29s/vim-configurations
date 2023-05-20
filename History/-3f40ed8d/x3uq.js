const mongoose = require("mongoose");

const mongooseStart = async () => {
    try {

        await mongoose.connect("mongodb://localhost:27017/olymics")
        console.log("mongodb Successfully connected");
        {
            "ranking" : 1, 
            "name" : "Christian  COLEMAn", 
            "dob" : "06 MAR 1996",
            "country" : "USA", 
            "score" : 1477
        }
    } catch (error) {
        console.log(error);
    }
};

mongooseStart()
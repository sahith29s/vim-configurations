const mongoose = require("mongoose");

const mongooseConnect = async () =>{
    try {
        
    const result = await mongoose.connect('mongodb://localhost:27018/usersdb');
    console.log("connected")
    

    } catch (error) {
        console.log(err);
        
    }

};


module.exports = mongooseConnect;
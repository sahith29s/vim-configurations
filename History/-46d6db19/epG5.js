const mongoose = require("mongoose");

const connectBD = async () =>{
    try {
        await mongoose.connect("mongodb://localhost/Durgesh")
        console.log("connected Successfully");

    }
    catch(error){
    
    console.log(error);
    
    };
};

module.exports = connectBD
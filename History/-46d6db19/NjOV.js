const mongoose = require("mongoose");

const connectBD = async () =>{
    try {
        mongoose.connect("mongodb://localhost/Durgesh")

    }
    catch(error){
    
    console.log(error);
    
    };
};
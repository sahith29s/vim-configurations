const mongoose = require("mongoose");

const connectBD = async () =>{
    try {
        mongoose.connect("mongodb://localhost/f")
    }
    catch(error){
    
    console.log(error);
    
    };
};
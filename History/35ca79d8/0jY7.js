const mongoose = require("mongoose");


const connectDb = async () =>{
    try {

        await mongoose.connect("mongodb://localhost/iNoteBook")
        console.log("mongoose connect succussfully");

    }
    catch(error){
    
    console.log(error);
    
    };
};


module.exports = connectDb
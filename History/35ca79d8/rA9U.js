const mongoose = require("mongoose");


const connectDb = async () =>{
    try {
        

        const mongoose.connect("mongodb://localhost/iNoteBook")
    }
    catch(error){
    
    console.log(error);
    
    };
};
const mongoose = require("mongoose");

const mongooseConnect = async () =>{
    try {
        
    const result = await mongoose.connect('mongodb://localhost:27018/usersdb')
    

    } catch (error) {
        
    }

};
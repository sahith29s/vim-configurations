import mongoose from "mongoose"
const userScehma = new mongoose.Schema({
    userName : {type : String , required : true},
    email : {type : String , required : true},
    password : {type : String, required : true}
})
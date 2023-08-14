import mongoose, { mongo } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true , "Please provide a username" ],
        unique : true
    },

    email : {
        type : String,
        required  :[true , "Please Enter your email"],
        unique : true
    },

    password : {
        type : String,
        required  :[true , "Please Enter your password"],
    },

    isVerfied : {
        type : Boolean,
        default : false
    },

    isAdmin : {
        type : Boolean,
        default : false
    }
        


})

const User = mongoose.models.users || mongoose.model("User" , userSchema)
export default User;
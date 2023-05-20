const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email id alrady present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalie error")
            }
        }
    }, 

    phone : { 
        type : string, 
        required : true,
        min : 10, 
        max : 10,
        unique : true
    },


    address : {
        type : String , 
        required : true
    }




})



const Student = new mongoose.model("Student", studentSchema

)
const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema({
//     name :  {
//         type : String,
//         required : true
//     },

//     email : {
//         type : String,
//         required : true
//     },

//     message : {
//         type : String,
//         required : true
//     }
// })


// module.exports = new mongoose.Schema("contactData" , contactSchema)

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    message : {
        type : String,
        required : true
    },


})

module.exports = new mongoose.model("contactData" , contactSchema)
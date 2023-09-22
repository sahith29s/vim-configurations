const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    sender : { type : mongoose.Schema.Types.ObjectId , ref : "User"},
    content : { type : string , trim : true}
    

})
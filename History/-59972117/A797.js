const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    you : {type :   Boolean , required : true},
    
},
{
    timeStamps : true
}
)

const chatModel = mongoose.model("chat" , chatSchema)
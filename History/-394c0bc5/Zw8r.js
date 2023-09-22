const mongoose = require("mongoose");

const ChatModelSchema = new mongoose.Schema(
    {

        chatName: { type: String, trim: true },
        isGroupChat : { type: Boolean, default : false},
        users : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : User,
        }],

        latestMessage 
        // chatName: { type: String, trim: true }

    }
)
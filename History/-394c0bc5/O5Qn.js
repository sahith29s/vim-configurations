const mongoose = require("mongoose");

const ChatModelSchema = new mongoose.Schema(
    {

        chatName: { type: String, trim: true },
        isGroupChat : { type: Boolean, default : false},
        users : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : User,
        }],

        latestMessage : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Message"
        }
        // chatName: { type: String, trim: true }

    }
)
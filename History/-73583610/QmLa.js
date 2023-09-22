const mongoose = require("mongoose")

const settingsSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        requierd : true,
    },<a href=""></a>
})
const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    tag: {
        type: String,
        defalut: "General"
    },

    date: {
        type: String,
        default: Date.now()
    },

})


module.exports = new mongoose.model("note", NotesSchema)

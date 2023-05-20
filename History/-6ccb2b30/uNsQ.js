const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name : String,
    class : String,
    rollNo : String
})


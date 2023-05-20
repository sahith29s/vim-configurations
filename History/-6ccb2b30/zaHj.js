const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name : String,
    class : String,
    rollNo : String
})


const StudentModel = new mongoose.model("Student", StudentSchema)

module.exports = StudentModel


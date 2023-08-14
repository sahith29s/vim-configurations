const Note = require("../model/notesModel")
const asyncHandler = require("asyncHandler")

const noteMaking = asyncHandler(async(req , res){
    const {title , description} = req.body
    const note = Note.create()
})
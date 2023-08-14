const Note = require("../model/notesModel")
const asyncHandler = require("express-async-handler")

const noteMaking = asyncHandler(async (req, res)=>{
    const { title, description } = await req.body
    try {
        const note = Note.create({
            title,
            description
        })

        console.log(note);
    } catch (error) {

    }

})

module.exports = {noteMaking}
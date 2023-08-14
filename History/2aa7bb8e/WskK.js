const Note = require("../model/notesModel")
const asyncHandler = require("asyncHandler")

const noteMaking = asyncHandler(async (req, res)=>{
    const { title, description } = req.body
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
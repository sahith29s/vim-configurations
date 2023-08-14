const Note = require("../model/notesModel")
const asyncHandler = require("express-async-handler")

const noteMaking = asyncHandler(async (req, res)=>{
    const { title, description } = await req.body
    console.log(title);
    try {
        const note = await Note.create({
            title,
            description
        })
        console.log(note);
        res.json(note)
    } catch (error) {
        res.json(error)

    }

})

const getNotes = asyncHandler((async(req, res) =>{
    const notes = await Note.find()
    res.json(notes)
}))

module.exports = {noteMaking}
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

const deleteNote = asyncHandler(async (req, res) =>{
    const {_id } = await req.body
    const deletedNote = await Note.deleteOne({_id })
    res.json(deletedNote)

})

const patchNote = asyncHandler(async (req, res)=>{
    const {_id } = await req.body
})

module.exports = {noteMaking , getNotes, deleteNote}
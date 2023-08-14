const Note = require("../model/notesModel")
const asyncHandler = require("express-async-handler")

const noteMaking = asyncHandler(async (req, res) => {
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

const getNotes = asyncHandler((async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
}))

const deleteNote = asyncHandler(async (req, res) => {
    try {
        const { _id } = await req.body
        const deletedNote = await Note.deleteOne({ _id })
        res.json(deletedNote)
    } catch (error) {
        console.log({ "delete Error": error });

    }

})

const patchNote = asyncHandler(async (req, res) => {
    const { _id , description} = await req.body

    const patchNote = await Note.fineOneAndUpdate({_id} , {$set : {"description" : description}})
    res.json(patchNote)
})

module.exports = { noteMaking, getNotes, deleteNote }
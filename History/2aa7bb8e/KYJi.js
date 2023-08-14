const Note = require("../model/notesModel")
const asyncHandler = require("express-async-handler")

const noteMaking = asyncHandler(async (req, res)=>{
    const { title, description } = await req.body
    try {
        const note = await Note.create({
            title,
            description
        })
        console.log(note);
        res.json(note)
    } catch (error) {
        res.json(error)
        console.log("shait");

    }

})

module.exports = {noteMaking}
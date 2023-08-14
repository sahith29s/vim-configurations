import mongoose from "mongoose"

const NoteSchema = mongoose.Schema({
    description : {
        type : String,
        require : true
    }
})

export default mongoose.model("Note" , NoteSchema)
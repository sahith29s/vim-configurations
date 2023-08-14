const express = require("express");
const port = process.env.PORT || 3000;
const notes = require("./data/notes")
const app = express();

app.get("/", (req, res) => {
    res.send("API is running...")
})

app.get("/api/notes" , (req, res) =>{
    res.json(notes)
})

app.get("/api/notes/:id" , (req, res) =>{
    res.json(notes[req.params.id])
})


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
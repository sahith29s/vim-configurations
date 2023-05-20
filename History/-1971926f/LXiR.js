const express = require("express");
require("dotenv").config()
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("../models/Todo")
const port = process.env.PORT || 3001;
const app = express();


// middle wares
app.use(express.json())
app.use(cors())


//connection to mongodb
mongoose.connect(process.env.MONGOOSE).then(() => { console.log("mongoose connection successful") })

// for fetch todos 
app.get("/todo/get", async (req, res) => {
    let todos = await Todo.find()
    res.json(todos)
});

// for posting / creating a todo 
app.post("/todo/post/:text", async (req, res) => {
    const todoCreate = await Todo.create({ todo: req.params.text })
    res.json(todoCreate)
});

// for deleting a todo 
app.delete("/todo/delete/:id", async (req, res) => {
    const todoDelete = await Todo.findByIdAndDelete(req.params.id)
    res.json(todoDelete)
});


// chaning the complete weather the todo is complete or not
app.put("/todo/put/:id", async (req, res) => {
    const todoPut = await Todo.findOne({ _id: req.params.id })
    todoPut.complete = !todoPut.complete
    todoPut.save()
    res.json(todoPut)
})



app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
const express = require("express");
const router = express.Router()


// for fetch todos 
router.get("/todo/get", async (req, res) => {
    let todos = await Todo.find()
    res.json(todos)
});

// for posting / creating a todo 
router.post("/todo/post/:text", async (req, res) => {
    const todoCreate = await Todo.create({ todo: req.params.text })
    res.json(todoCreate)
});

// for deleting a todo 
router.delete("/todo/delete/:id", async (req, res) => {
    const todoDelete = await Todo.findByIdAndDelete(req.params.id)
    res.json(todoDelete)
});


// chaning the complete weather the todo is complete or not
router.put("/todo/put/:id", async (req, res) => {
    const todoPut = await Todo.findOne({ _id: req.params.id })
    todoPut.complete = !todoPut.complete
    todoPut.save()
    res.json(todoPut)
})


exp
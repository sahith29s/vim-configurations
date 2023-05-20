const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();
const Todo = require("./models/Todo")
app.use(express.json())

//mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tylerPotts").then((value) => {
    console.log("connected to mongoose");
})


app.get("/todos", async (req , res) => { 
    const todos = await Todo.find()
    res.status(201).json(todos)
});

app.post("/todo/new", async (req, res) => {
    const newTodo = await Todo.create({
        text: req.body.text
    })

    res.json(newTodo)
});


app.delete("/todo/delete/:id", async (req, res) => {
    const deleteTodo = await Todo.deleteOne({ _id: req.params.id })
    res.json(deleteTodo)
})

app.put("/todo/complete/:id", async (req, res) => {
    let todoComplete = await Todo.findOne({_id : req.params.id})
    todoComplete.complete = !todoComplete.complete
    todoComplete.save()
    res.send(todoComplete)
})






app.listen(port, () => {
    console.log(`app running on port ${port}`)
})


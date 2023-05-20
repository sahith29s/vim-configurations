const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const Todo = require("./models/Todo")
app.use(express.json())

//mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tylerPotts").then((value) => {
    console.log("connected to mongoose");
})



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
    console.log(todoComplete);
    todoComplete.complete = !todoComplete.complete
    res.send(todoComplete)
})






app.listen(port, () => {
    console.log(`app running on port ${port}`)
})


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("../models/Todo")
const port = process.env.PORT || 3001;
const app = express();


// middle wares
app.use(express.json())
app.use(cors())


//connection to mongodb
mongoose.connect("mongodb://localhost/myTryTodoReact").then(() =>{console.log("mongoose connection successful")})

app.get("/todo/get", async  (req, res)=>{
    let todos = await Todo.find() 
    res.json(todos)
});

app.post("/todo/post/:text", async (req , res) => { 
    const todoCreate = await Todo.create({todo : req.params.text })
    res.json(todoCreate)
});

app.delete("/todo/delete/:id", async (req , res) => { 
    const todoDelete = await Todo.findByIdAndDelete(req.params.id)
    res.json(todoDelete)
});


// chaning the complete weather the todo is complete or not
app.put("/todo/put/:id" , async (req, res) =>{
    const todoPut = await Todo.findByIdAndUpdate(req.params.id)
    todoPut.complete = !todoPut.complate
    res.json(todoPut)
})



app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
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


app.put("/todo/put" , async (req, res) =>{


})



app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
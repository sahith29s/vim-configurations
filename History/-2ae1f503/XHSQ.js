const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const Todo = require("./models/Todo")
app.use(express.json())

//mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tylerPotts").then((value) =>{
    console.log("connected to mongoose");
})



app.post("/todo/new", async (req , res) => { 
    const newTodo = await Todo.create({
        text : req.body.text
    })

    res.json(newTodo)
});


app.delete("/todo/delete" , async (req, res)=>{
    const delteedTodo = await Todo.deleteOne(_id : req.params.id)
})




  

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})


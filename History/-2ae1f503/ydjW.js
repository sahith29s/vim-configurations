const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const Todo = require("./models/Todo")

//mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tylerPotts").then((value) =>{
    console.log("connected to mongoose");
})



app.post("/todo/new", async (req , res) => { 
    const newTodo = Todo.create({
        todo : 
    })
});




app.use(express.json())
  

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})


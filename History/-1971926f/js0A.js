const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();


//connection to mongodb
mongoose.connect("mongdb://localhost/myTryTodoReact")

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
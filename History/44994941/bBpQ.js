// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");


  

// connection to mongoose 
require("../mongoose/connectDb/connectDb")()

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
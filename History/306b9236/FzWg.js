// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");


// Paths
const viewsPath = require("")

// Set view engine 
app.set("view engine" , "hbs")
app.set("views" , )
  

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
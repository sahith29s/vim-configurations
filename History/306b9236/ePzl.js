// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");


// Paths
const viewsPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "../templates/partials")

// Set view engine 
app.set("view engine" , "hbs")
app.set("views" , viewsPath)
hbs
  

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
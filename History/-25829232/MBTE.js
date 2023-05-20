const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
  
// set view engine
app.set("view engine" , "hbs")
app.set("views" , path.join(__dirname, "../template/views"))

app.use("public" , express.static("public"))

app.get("/", (req, res)=>{
    res.send("Hi");
});



app.listen(port, ()=>{
    console.log(`app running on port port`)
})
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
  
// set view engine
app.set("view engine" , "hbs")
app.set("views" , "")

app.use("public" , express.static("public"))

app.get("/", (req, res)=>{
    res.send("Hi");
});



app.listen(port, ()=>{
    console.log(`app running on port port`)
})
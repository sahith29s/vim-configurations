const express = require("express");
port = process.env.PORT || 3000
const path = require("path");
const app = express();
  
app.set("view engine", "hbs")

app.set("views" , path.join(__dirname, "./views") )
app.get("/", (req, res)=>{
    res.render("index")
});


app.listen(port);
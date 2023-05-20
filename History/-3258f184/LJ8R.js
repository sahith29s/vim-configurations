const express = require("express");
port = process.env.PORT || 3000
const app = express();
  
app.set("view engine", "hbs")
app.get("/", (req, res)=>{
    res.render()
});


app.listen(port);
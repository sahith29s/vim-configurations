const express = require("express");
port = process.env.PORT || 3000
const app = express();
  

app.get("/", (req, res)=>{
    res.render("index")
});


app.listen(port);
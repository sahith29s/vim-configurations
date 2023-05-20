const express = require("express");
port = process.env.PORT || 3000
const app = express();
  
app.set("view engine", "hbs")
app.get("/", (req, res)=>{
    
});


app.listen(port);
const express = require("express");
const express = require("express");

port = process.env.PORT || 3000
const app = express();
  

app.get("/", (req, res)=>{
    res.send("");
});


app.listen(port);
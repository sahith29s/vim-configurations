const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
  

// connection to mongoose 
require("../mongoose/connectDb/connectDb")()

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
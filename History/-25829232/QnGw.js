const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
  

app.use("public" , express.static("public"))

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port port`)
})
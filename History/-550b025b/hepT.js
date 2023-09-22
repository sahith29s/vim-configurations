const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const data = require("./data/data")
console.log(data);

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

mong

app.get("/", (req, res)=>{
    res.sendFile(path.join( __dirname , "client/fake.html"))
});

app.listen(port, ()=>{
    console.log(`app running on port `,port)
})
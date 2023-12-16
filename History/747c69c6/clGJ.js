const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res)=>{
    res.send("Hi This is me");
});

app.listen(port, ()=>{
    console.log(`app running on port `,port)
})
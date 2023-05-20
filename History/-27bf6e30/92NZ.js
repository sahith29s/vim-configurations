const express = require("express")
const app = express()


app.get("/", (req, res)=>{
    res.send("sahith")
})

app.listen(3000)
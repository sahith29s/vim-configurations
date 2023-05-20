const express = require("express")
const app = express()
const http = require("http").Server(app)





app.get("/", (req, res)=>{
    res.send("sahith")
})

app.listen(3000)
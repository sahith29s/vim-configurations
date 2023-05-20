const express = require("express")
const app = express()
const http = require("http").Server(app)


const io = require("socket.io")(http)

io.on("connection", (socket)=>{
    
})


app.get("/", (req, res)=>{
    res.send("sahith")
})

app.listen(3000)
const express = require("express")
const app = express()
const http = require("http").Server(app)
const path = require("path")


const io = require("socket.io")(http)



app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"))
})

io.on("connection", (socket)=>{
    console.log(socket)
})

http.listen(3000)
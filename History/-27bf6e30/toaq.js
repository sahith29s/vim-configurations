const express = require("express")
const app = express()
const server = require("server").Server(app)
const path = require("path")


const io = require("socket.io")(server)



app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"))
})

io.on("connection", (socket)=>{
    console.log(socket)
})

server.listen(3000)
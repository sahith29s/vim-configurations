const express = require("express")
const app = express()
const server = require("http").Server(app)
const path = require("path")


const io = require("socket.io")(server)

io.on("connection", (socket)=>{

})


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"))
})

server.listen(3000)
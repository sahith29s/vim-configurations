const express = require("express")
const app = express()
const server = require("http").Server(app)
const path = require("path")


const io = require("socket.io")(server)



app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"))
})

io.on("connection", (socket)=>{
    socket.on("disconnect", ()=>{
        console.log("A user has disconnected")
        
    })
})
server.listen(3000)

const express = require("express")
const app = express()

const server = require("http").Server(app)
const path = require("path")
const io = require("socket.io")(server)



app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../index.html"))
})

const users = {}
io.on("connection", socket =>{
    socket.on("new-user-joined", name =>{
        console.log(name)
        users[socket.id] = name;
        socket.broadcast.emit("user-joined", "name")
    })

    socket.on("send", message=>{
        socket.broadcast.emit("receive", {message : message , name: user[socket.id]})
    })
})



server.listen(3000)
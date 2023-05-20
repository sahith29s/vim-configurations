const express = require("express")
const io = require("socket.io")(8000)

const user = {}

io.on("connection", (socket)=>{
    socket.on("new-user-joined"), name=>{
        user[socket.id] = name;
        socket.broadcast.emit("user-joined", name)

    }

    // socket.on("send", message=>{
    //     socket.broadcast.emit("recieve", {message : message, name : user[socket.id]})
    // })
})

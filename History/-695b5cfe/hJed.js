const express = require("express")
const io = require("socket.io")(8000)

const user = {}

io.on("connection", (socket)=>{
    socket.on("new-user-joined"), name=>{
        user[socket.id] = name;

    }
})

const man = {}
man.sai= "sahith"
console.log(man)
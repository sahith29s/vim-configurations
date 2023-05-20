
const express = require("express")
const app = express()

const server = require("http").Server(app)
const path = require("path")
const io = require("socket.io")(server)



app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../index.html"))
})


io.on("connection", socket =>{
    socket.on("user-joined", name =>{
        
    })
})



server.listen(3000)
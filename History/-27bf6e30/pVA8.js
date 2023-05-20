const express = require("express")
const app = express()
const server = require("http").Server(app)
const path = require("path")


const io = require("socket.io")(server)



app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"))
})

io.on("connection", (socket)=>{
    console.log("A user joined")
    socket.on("disconnect", ()=>{
        console.log("A user has disconnected")

    })
    socket.on("message",(message)=>{
        console.log(message)
    })

    socket.emit("server", "This message is from server by sahith.js WTF are you fucking  serious by any chance? fuck not!")
})
server.listen(3000)
const express =  require("express")
const app = express()
const path = require("path")
const port = 8000
const server = require("http").Server(app)
const io = require("socket.io")(server)


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})
const users = {}
io.on("connection",(socket)=>{
    socket.on("new-user-joined", )
    
})


server.listen(port, ()=>{
    console.log("Server is running on port " + port)
})
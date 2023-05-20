const express = require("express")

const app = express()

const server = require("http").createServer(app)
const io = require("socket.io")(server)
app.set("view engine", "hbs")


app.get("/", (req, res)=>{
    res.render("index")
} )


server.listen(3000)


io.on("connection" , (socket)=>{
    console.log(socket.id)
})
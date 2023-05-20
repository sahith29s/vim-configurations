const io = require("socket.io")(8000)

const users = {}

io.on("connnection", socket=>{
    socket.on("new-user-joined", name=>{
        users[socket.id] = name ;
        socket.broadcast.Emit("user-joined
        ")
    })
})
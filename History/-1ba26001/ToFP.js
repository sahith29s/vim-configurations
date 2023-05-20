// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const http = require("http").createServer(app)
const io = require("socket.io")(http)

// paths
const path = require("path");
const hbs = require("hbs");
const router = require("../routes/router")

// arrary for storing the users name
let usersStorageArray = []

// middle wares
app.use("/public" , express.static("public"))


// routes 
app.use("/" , router)


// Paths
const viewsPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "../templates/partials")

// function for checking the entered name already taken by anyone or not 
// const checkUserAlreadyThere = async (username) =>{

//     if(usersStorageArray.includes(username)){
//         socket.emit("yesUserAlreadyThere", true)
//         checkUserAlreadyThere()
//     }

//     else{
//         usersStorageArray.push(username)
//     }
// };


// Set view engine 
app.set("view engine" , "hbs")
app.set("views" , viewsPath)
hbs.registerPartials(partialsPath)


http.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})


// socket io
io.on("connection" , (socket) => {
    socket.on("messageObjToServer", (messageObj) =>{
        socket.broadcast.emit("messageObjBackFromServerToClientJs" , messageObj)
    })

    // appending all the users in the array 
    socket.on("nameOfTheUser" , (name) =>{
        usersStorageArray.push(name)
        
        // after appenind sending the array to clientjs for checking if the name exists
        socket.emit("usersArrayFromServer" , usersStorageArray)


    })
})


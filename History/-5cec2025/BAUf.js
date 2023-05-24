// const express = require("express")
// const User = require("./config")
// const app = express()

// app.use(express.json())


// app.post("/create" , async (req, res) =>{
//     const data = req.body
//     await User.add(data)
//     res.send({Msg : "User Added"})
// })



// app.listen(3000, (e) =>{
//     console.log("running");
// })


const express = require("express");
const port = process.env.PORT || 3000;
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
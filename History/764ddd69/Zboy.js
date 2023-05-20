const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.send("This is me  and you fuck you bitch and stuff and ")
})


app.listen(3000, ()=>{
    console.log('app running port 3000')
})
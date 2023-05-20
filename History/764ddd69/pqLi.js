const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.sendFile(p)
})


app.listen(3000, ()=>{
    console.log('app running port 3000')
})
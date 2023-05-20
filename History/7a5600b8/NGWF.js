const express = require("express")
const app = express()


app.get("/",(req, res)=>{
    res.send("This is sahith from handle bars")
} )

app.listen(3000, ()=>{
    console.log("this is from this")
})
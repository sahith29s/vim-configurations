const express = require("express")
const app = express()
const path = require("path")
[[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80
    http_options = { response = { headers = { Content-Type = ["text/html", "text/javascript"] } } }

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname , "index.html"))
})


app.listen(3000, ()=>{
    console.log('app running port 3000')
})
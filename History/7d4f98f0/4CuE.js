const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello world! nahi kabhi nahi likha bhai ')lsdjf lsdjf lsldkfj asdlfsdlf asjdlkfaj sdlfsd lfsdlfsdlf asdjlfkasd jfthis is is amazing using vima dn stuff the what thehack are you even taking with and stuff 
    res.sendStatus(500)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(("sahith"))
setTimeout(() => {
    console.log("ljdflsdj")
}, 1000);


console.log("end")

const fs = require("fs")


fs.appendFileSync("./sahith/th.txt", "sahith ")
let file = fs.readFileSync("./sahith/th.txt").toString();


const fs = require("fs")
fs.mkdir("sahith", () => {
    console.log("")
})

fs.writeFile("./sahith/sahith.txt", "", () => {
    console.log("file created")
})

fs.appendFile("./sahith/sahith.txt", "kabhi kabhi lgta ke apun he bagwan he", () => {
    console.log("khatam")
})

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Sahith")

})

app.listen(3000, "127.0.0.1", () => {
    console.log("sahith")
})


const http = require("http")
const app = http.createServer((req, res) => {
    res.end("sahith")
})


app.listen(3000, "127.0.0.1")

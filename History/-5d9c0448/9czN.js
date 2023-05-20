const express = require("express");
require("./db/conn")()
const path = require("path");
port = process.env.PORT || 3000;
const app = express();

const viewsPath = path.join(__dirname, "../views")

app.set("view engine" , "hbs")
app.set("views", viewsPath)

app.get("/", (req, res)=>{
    res.render("index.hbs")
});


app.listen(port, ()=>{
console.log(`app running on port ${port}`)
})
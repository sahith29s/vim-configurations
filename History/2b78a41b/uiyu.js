const express = require("express");
const hbs = require("hbs");
require("./db/conn")()
const path = require("path");
port = process.env.PORT || 3000;
const app = express();

app.use(express.)

const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

hbs.registerPartials(partialsPath)

app.set("view engine" , "hbs")
app.set("views" , viewsPath)


app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/contact", async (req , res) => { 
    res.render("contact")
});


app.listen(port, ()=>{
console.log(`app running on port ${port}`)
})
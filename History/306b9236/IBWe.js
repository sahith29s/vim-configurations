// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const hbs = require("hbs");

// middle wares
app.use("/public" , express.static("public"))


app.use("/" , route)


// Paths
const viewsPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "../templates/partials")

// Set view engine 
app.set("view engine" , "hbs")
app.set("views" , viewsPath)
hbs.registerPartials(partialsPath)


app.get("/", (req, res)=>{
    res.render("index.hbs")
});


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})
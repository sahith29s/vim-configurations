const express = require("express");
const hbs = require("hbs");
require("./db/conn")()
const path = require("path");
port = process.env.PORT || 3000;
const app = express();

const RegisterModel = require("./models/registers")

app.use(express.json())
app.use(express.urlencoded({extended : false}))

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

app.post("/register", async (req , res) => { 
    try {

        const result = RegisterModel.create({
            name : req.body.name,
            
        })
        
    } catch (error) {
        res.send(error)
        
    }
});


app.listen(port, ()=>{
console.log(`app running on port ${port}`)
})
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const router = express.Router()
const signUpRouter = require("./routes/signUp")

router.get("/" , (req, res) =>{
    res.send("this is me inside the vim")
})


app.use("/signup", signUpRouter)


app.get("/", (req, res) => {
    res.send("Hi");
});



app.listen(port, () => {
    console.log(`app running on port port`)
})
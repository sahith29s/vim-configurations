const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const router = express.Router()

router.get("/" , (req, res) =>{
    res.send("this is me inside the vim")
})

const signUpRoute = require("./routes/signUp")

// app.use("/signup", signUpRoute)


app.get("/", (req, res) => {
    res.send("Hi");
});



app.listen(port, () => {
    console.log(`app running on port port`)
})
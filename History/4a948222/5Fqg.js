const express = require("express");
const cors = require("cors")
const port = process.env.PORT || 5000;
const app = express();
const router = express.Router()
const signUpRouter = require("./routes/signUp.router")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// connect to mongodb atlas
require("./connectDb/connectDb")()

// sign up routes
app.use("/signup", signUpRouter)


router.get("/", (req, res) => {
    res.send("this is me inside the vim")
})

app.get("/", (req, res) => {
    res.send("Hi");
});

app.listen(port, () => {
    console.log(`app running on port port`)
})
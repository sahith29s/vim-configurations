const express = require("express");
const cookieParser = require("cookie-parser")
const jsonwebtoken = require("jsonwebtoken")
const cors = require("cors")
const port = process.env.PORT || 5000;
const app = express();
const router = express.Router()
const signUpRouter = require("./routes/signUp.router")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// connect to mongodb atlas
require("./connectDb/connectDb")()

// sign up routes
app.use("/signup", signUpRouter)

// product Routes
app.use("/product" ,require("./routes/product.router"))


router.get("/", (req, res) => {
    res.send("this is me inside the vim")
})

app.get("/", (req, res) => {
    res.send("Hi");
});

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
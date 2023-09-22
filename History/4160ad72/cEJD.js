const cookieParser = require("cookie-parser")
const userRouter = require("./routes/userRoutes")

require("dotenv").config()

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();


// regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookie middleware 
app.use(cookieParser())

app.use("/api", userRouter)

app.get("/", (req, res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port port`)
})
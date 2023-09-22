const cookieParser = require("cookie-parser")

require("dotenv").config()

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/", (req, res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port port`)
})
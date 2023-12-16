const express = require("express");
const cookieParse = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const {signup} = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// middleware for cookie
app.use(cookieParse());


app.use("/api/user" ,  userRoutes);

app.get("/", (req, res) => {
    res.send("Hi");
});

app.listen(port, () => { console.log(`app running on port `, port) })
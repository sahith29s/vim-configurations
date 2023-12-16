const express = require("express");
const cookieParse = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cookieParse());

app.get("/", (req, res) => {
    res.send("Hi");
});

app.listen(port, () => { console.log(`app running on port `, port) })
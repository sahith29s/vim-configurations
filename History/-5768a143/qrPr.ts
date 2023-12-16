// const express = require("express")
// import express , {Express , Request , } from "express"
const express = require("express")
// const {Express , Request ,  Response , Application} = require("express")

const port = process.env.PORT || 3000;
const app = express();


app.get("/", (req  , res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port `, port)
})
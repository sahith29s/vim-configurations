// const express = require("express");
import express from "express"
import { AdminRoute , VandorRoute } from "./routes";
const port = process.env.PORT || 3000;
const app = express();

app.use("/admin" , AdminRoute)
app.use("/vandor" , VandorRoute)


app.listen(port, ()=>{
    console.log(`app running on port `,port)
})
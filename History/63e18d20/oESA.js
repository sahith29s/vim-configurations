const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const userRotues = require("./routes/userRoutes");

// connect db
const connectDB = require("./connectDB/connectDB");
connectDB();

// user route middleware
app.use("/api/user" , userRotues)



app.get("/", (req, res, next) => {
    res.send("Hi");
});

app.listen(port, () => { console.log(`app running on port `, port); });
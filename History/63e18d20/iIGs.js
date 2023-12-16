const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const app = express();
const userRotues = require("./routes/userRoutes");
app.use(cors());
app.options('*', cors());
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// connect db
const connectDB = require("./connectDB/connectDB");
connectDB();

// user route middleware
app.use("/api/user", userRotues);

app.get("/", (req, res, next) => {
    res.send("Hi");
});

app.listen(port, () => { console.log(`app running on port `, port); });
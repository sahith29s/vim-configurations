const express = require("express");
const port = process.env.PORT || 5000;
const app = express();


app.get("/", (req, res) => {
    res.send("Hi");
});

// app.use("signup" , require("./routes/signUp"))


app.listen(port, () => {
    console.log(`app running on port port`)
})
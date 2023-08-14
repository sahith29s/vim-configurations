const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const signUpRoute = require("./routes/signUp")

// app.use("/signup", signUpRoute)
console.log(signUpRoute);

app.get("/", (req, res) => {
    res.send("Hi");
});



app.listen(port, () => {
    console.log(`app running on port port`)
})
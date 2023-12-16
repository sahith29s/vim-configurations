const express = require('express');
const path = require("path")
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb+srv://sahith:sahith@cluster0.7szhj0r.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("connected")
    });

const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const UserModel = mongoose.model("User", UserSchema);

app.get('/login/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/login/login.html"))
});

app.get('/signup/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/signup/signup.html"))
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/navbar.html"))
})
app.get("/hand/", (req, res) => {
    console.log(req.query.username);
    const username = req.query.username;
    const email = req.query.email;
    const password = req.query.password;
    const user = UserModel.create({
        username, email, password
    })
    res.send("done")

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require("express");
const port = process.env.PORT || 3000;
const User = require("./config")
const app = express();


app.use(express.json())


app.get("/", async (req, res) => {
    const data = req.body
    await User.add(data)
    res.send("fuck you bitch")
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
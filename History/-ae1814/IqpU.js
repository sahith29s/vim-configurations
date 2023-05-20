const express = require("express");
const port = process.env.PORT || 3001;
const app = express();


app.use(cors())


app.get("/", (req, res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
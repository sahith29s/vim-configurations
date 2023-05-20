const express = require("express");
const port = process.env.PORT || 3001;
const app = express();


app.use(cors())


app.get("/", (req, res) => {
    res.send("Hi");
});

app.post("/api/register", async (req, res) => {
    
})


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
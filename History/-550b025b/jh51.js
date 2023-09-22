const express = require("express");
require("dotenv").config()
const port = process.env.PORT || 5000;
const app = express();
const  chats  = require("./data/data");

app.get("/", (req, res) => {
    res.json(chats);
});

app.get("/:id" , (req, res) =>{
    const singleChat = chats.find((c) => c._id === req.params.id );
    res.send(singleChat);
})


app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
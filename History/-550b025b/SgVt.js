const express = require("express");
require("dotenv").config()
const port = process.env.PORT || 5000;
const app = express();
const chats = require("./data/data");
const cors = require("cors")
const connectDb = require("./config/db")
const userRouter = require("./routes/userRoutes")

// To accept json
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(cors())

connectDb()


// app.get("/api/chat", (req, res) => {
//     res.json(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// })

app.use("/api/user", userRouter)
app.use("/api/chat" , chatRoutes)

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
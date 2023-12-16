require("dotenv").config();


const connectDB = require("./connectDB/connectDB");
connectDB(process.env.MONGO_URI);

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const http = require("http");
const chatRoutes = require("./routes/chatRoutes");
const { Server } = require("socket.io");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req: any, res: any) => res.send("sahith"));


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket: any) => {
    console.log("user connected", socket.id);
    socket.on("mess", (mes: any) => console.log(mes));
    socket.on("message", (messObj: any) => {
        socket.broadcast.emit("messageBackFromServer", messObj)
    })
})

server.listen(PORT, () => console.log("Sever running on port :", PORT));
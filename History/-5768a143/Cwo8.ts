import express, { Request, Response, Application } from "express";
import connectDB from "./connectDB/connectDB";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/userRoutes";
dotenv.config();
import cors from "cors";

connectDB(process.env.MONGO_URI as string);

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);

app.get("/", (req: Request, res: Response): void => {
    res.send("Hi");
});

app.listen(port, (): void => {
    console.log(`app running on port `, port);
})
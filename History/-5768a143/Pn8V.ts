import express, { Request, Response, Application } from "express";
import connectDB from "./connectDB/connectDB";
import dotenv from "dotenv"
dotenv.config()
import userRouter from "./routes/userRoutes";
connectDB(process.env.MONGO_URI)

dotenv.config();
const app: Application = express();
const port = 3000;

app.use("/user" , userRouter);

app.get("/", (req: Request, res: Response): void => {
    res.send("Hi");
});





app.listen(port, (): void => {
    console.log(`app running on port `, port)
})
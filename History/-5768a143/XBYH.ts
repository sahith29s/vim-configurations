import express, { Request, Response, Application } from "express";
import dotenv from "dotenv"
import router from "./routes/userRoutes";

dotenv.config();
const app: Application = express()
const port = 3000;

app.use("/user" , router)

app.get("/", (req: Request, res: Response): void => {
    res.send("Hi");
});




app.listen(port, (): void => {
    console.log(`app running on port `, port)
})
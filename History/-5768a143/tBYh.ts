import express, { Request, Response, Application } from "express";
import dotenv from "dotenv"

dotenv.config();
const app: Application = express()
const port = 3000;


app.get("/", (req: Request, res: Response): void => {
    res.send("Hi");
});


app.listen(port, (): void => {
    console.log(`app running on port `, port)
})
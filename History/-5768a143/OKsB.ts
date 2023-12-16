import express, {  Request, Response, Application } from "express";
import dotenv from "dotenv"

dotenv.config();

// const app : Application = express();
const app : Application = express()
// const port = process.env.PORT || 3000;
const port = 3000;


app.get("/", (req : Request, res : Response) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port `, port)
})
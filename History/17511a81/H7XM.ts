import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import { Response, Request } from "express";
import userModel from "../models/userModel";
import { sendEmail } from "../utils/nodemailer";

const createUser = expressAsyncHandler(async (req: Request, res: Response) => {
    try {
        const { userName, email, password } = req.body;
        let userCreated = await userModel.create({ userName, email, password });
        userCreated.password = "";
        console.log(userCreated);
        res.json(userCreated);

    } catch (error) {
        res.send(error);
    }
});
const verifyForEmailReset = expressAsyncHandler(async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        let user = await userModel.findOne({ email });
        console.log("there");
        if(user){
            await sendEmail();

            res.json("success").status(302);
            return ;
        }
        else{
            res.json("failed").status(404);
            return ;
        }
    } catch (error) {
        res.json(error)
    }
});

const loginVerfiy = expressAsyncHandler(async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        let isUser = await userModel.findOne({ email, password });
        if (isUser) {
            const token = jwt.sign({ _id: isUser._id }, "sahith");
            res.json({ isUser, token });
        }
        else { res.json("user doesn't exists") };
    }
    catch (error) {
        res.json(error);
    };
})




export { createUser, loginVerfiy , verifyForEmailReset};
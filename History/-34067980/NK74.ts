import express, { Response, Request } from "express";
import { createUser, loginVerfiy, verifyForEmailReset } from "../controllers/userController";
import auth from "../middlewares/auth";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginVerfiy);
router.post("forgotpass" , verifyForEmailReset);

export default router;
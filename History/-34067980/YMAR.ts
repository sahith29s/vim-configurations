import express, { Response, Request } from "express";
import { createUser, loginVerfiy } from "../controllers/userController";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginVerfiy);
router.post("/auth" , )

export default router;
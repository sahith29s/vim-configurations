import express, { Response, Request } from "express";
import { createUser } from "../controllers/userController";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", createUser);

export default router;
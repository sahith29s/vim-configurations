import express ,{Response , Request}from "express";
const router = express.Router();

router.get("/" , (req : Request, res : Response) => {
    res.json("sahith");
})

export default router;
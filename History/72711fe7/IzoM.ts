import express ,{ Request , Response , NextFunction } from "express";
const router = express.Router();

router.get("/" , (req : Request , res , Response)=>{
    res.json({message : "Hello this is Admin"})
})

export {router as VandorRoute}
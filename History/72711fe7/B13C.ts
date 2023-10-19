import express ,{ Request , Response , NextFunction } from "express";
const router = express.Router();

router.get("/" , (req : Request , res , Response)=>{

            kes.json({message : "Hello this is Vandor"})
})

export {router as VandorRoute}
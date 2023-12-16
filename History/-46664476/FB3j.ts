import { Response, Request, NextFunction } from "express";
const auth = (req: Request, res: Response) => {
    const token = req.cookies['token']
    // console.log(token);
    res.cookie("sahith" , "sahith");
    res.json(token);
};

export default auth;
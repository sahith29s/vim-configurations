import { Response, Request, NextFunction } from "express";
const auth = (req: Request, res: Response) => {
    const token = req.cookies['token']

    // console.log(token);
    try {
        res.cookie("sahith", "sahith");
        const loc = localStorage.getItem("formData");
        console.log(loc);
    }
    catch (error) {
        console.log(error);
    };
    res.json(token);
};

export default auth;
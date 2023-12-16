import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.net",
    auth: {
        user: "nodemailer325@gmail.com",
        pass: "",
    },
});

const 

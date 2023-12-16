import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.net",
    auth: {
        user: "nodemailer325@gmail.com",
        pass: "",
    },
});


const sendEmail = async () => {
    const info = await transporter.sendMail({
        from: "nodemailer325@gmail.com", // sender address
        to: "honey.sahith29@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
}

export { sendEmail }
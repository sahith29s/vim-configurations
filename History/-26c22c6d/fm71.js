
// const express = require("express");
// const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer");
// const app = express();


// app.get("/", (req, res) => {
//   res.send("Hi");
// });

// app.get("/email", async (req, res) => {

// })


(
  async () => {
    const transporter = nodemailer.createTransport({
      name : "Felix Jast",
      host : "smtp-relay.brevo.com",
      port : 587,
      auth: {
        user: "honey.sahith29@gmail.com",
        pass: "xsmtpsib-54e1a34a2243206ca5a4be21a86736017eadd6a9e4451d3697a82d2c8a23084d-1WaFn9Q4TkL7D8Vx"
      }
    });

    try {
      const info = await transporter.sendMail({
        from: "honey.sahith29@gmail.com", // sender address
        to: "honeynotop@gmail.com", // list of receivers
        subject: "Nothing", // Subject line
        text: "This is me inside the vim", // plain text body
      });
      console.log(info);
    }
    catch (error) {
      console.log(error);
    };
  })()
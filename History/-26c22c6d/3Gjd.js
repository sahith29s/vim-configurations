
// const express = require("express");
// const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer");
// const app = express();


// app.get("/", (req, res) => {
//   res.send("Hi");
// });

// app.get("/email", async (req, res) => {

// })


// (
//   async () => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port : 587,
//       auth: {
//         user: "felix.jast@ethereal.email",
//         pass: "rADNQMcYBdusr79aAU"
//       }
//     });

//     try {
//       const info = await transporter.sendMail({
//         from: "felix.jast@ethereal.email", // sender address
//         to: "honeynotop@gmail.com", // list of receivers
//         subject: "Nothing", // Subject line
//         text: "This is me inside the vim", // plain text body
//       });
//       console.log(info);
//     }
//     catch (error) {
//       console.log(error);
//     };
//   })()

(
  async () => {
    const config = {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "nodemailer525@gmail.com",
        pass: "sahith29s"
      }
    }
    const data = {
      "from": "nodemailer325@gmail.com",
      "to": "honey.sahith29@gmail.com",
      "subject": "This is me inside the vim",
      "text": "Sahith"
    }
    try {
    const transporter = nodemailer.createTransport(config)
    const info = await transporter.sendMail(data)
    console.log(info);
    }
    catch(error){
    console.log(error);
    };
  }
)()
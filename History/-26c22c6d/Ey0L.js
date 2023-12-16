
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
      // host: "smtp.ethereal.email",
      // port: 587,
      service:"gmail",
      auth: {
        user: "dasia19@ethereal.email",
        pass: "DFGYuHw7ufBfTVc82N"
      }
    });

    try {
      const info = await transporter.sendMail({
        from: "dasai19@etheral.email", // sender address
        to: "honey.sahith29@gmail.com", // list of receivers
        subject: "Nothing", // Subject line
        text: "This is me inside the vim", // plain text body
      });
      console.log(info);
    }
    catch (error) {
      console.log(error);
      res.send("error")
    };
  })()
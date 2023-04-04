import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3000;
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f69a761101bdb0",
      pass: "3b71e87a27d2c6"
    }
  });

app.use(cors())

app.get('/mail', (req, res) => {
    transport.sendMail({
        from: "foo@example.com",
        to: "bar@example.com",
        subject: "Hallo",
        text: "Hello, world"
    },(err, info) => {
        if (err) return res.sendStatus(500).end("error, "+ err)
        //console.log("Message sent: %s", info);
        res.json( info)

    })


})

app.listen(PORT,()=> console.log("Server lauscht auf Port"+ PORT))
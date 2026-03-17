// config/mail.js

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e2b69364b68216",
    pass: "03fbbed3fc64cc"
  }
});

module.exports = transport;
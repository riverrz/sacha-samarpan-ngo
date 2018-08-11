const { gmailPassword } = require("../config/keys");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sacchasamarpan@gmail.com",
    pass: gmailPassword
  }
});

console.log("Gmail Password", gmailPassword);

module.exports = transporter;

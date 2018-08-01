// Importing dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

// Importing Models
const Member = require("./Models/Member");
const Intern = require("./Models/Intern");

// Importing utility functions
const {
  findExistingIntern,
  findExistingMember
} = require("./utilities/functions");

// Importing URIs from keys.js
const { mongoURI } = require("./config/keys");

// Importing Transporter of Nodemailer
const Transporter = require("./Mailer/Mailer");

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(mongoURI);

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registration", async (req, res) => {
  if (!req.body.member) {
    return res.send("Please enter registration details");
  }
  const possibleNewMember = req.body.member;
  const attrToFind = {
    name: possibleNewMember.name,
    phone: possibleNewMember.phone,
    email: possibleNewMember.email
  };
  const foundMember = await findExistingMember(attrToFind);
  if (foundMember) {
    return res.send("You have already registered");
  }
  const newMember = await Member.create(possibleNewMember);
  res.send(
    `Thank You ${
      newMember.name
    } for becoming a member of Sacha Samarpan. Your membership ID will be sent to you on the provided email `
  );
});

app.post("/internship", async (req, res) => {
  if (!req.body.intern) {
    return res.send("Please enter details for registering as Intern");
  }
  const possibleNewIntern = req.body.intern;
  const attrToFind = {
    name: possibleNewIntern.name,
    phone: possibleNewIntern.phone,
    email: possibleNewIntern.email
  };
  const foundIntern = await findExistingIntern(attrToFind);
  if (foundIntern) {
    return res.send("You are already registered as an Intern");
  }
  const newIntern = await Intern.create(possibleNewIntern);
  const mailOptions = {
    from: 'sacchasamarpan@gmail.com',
    to: possibleNewIntern.email,
    subject: 'Successful registeration as intern',
    html: '<p>Thank you for becoming a part of out NGO as an intern</p>'
  }
  Transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      throw err;
    } else {
      console.log(info);
    }
  })
  res.send(
    `Thank you for joining us ${
      newIntern.name
    } as an Intern. We hope to work with you and bring a positive change in our society. Your internID will be sent to you on your provided Email`
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server has started");
});

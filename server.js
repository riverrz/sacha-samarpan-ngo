// Importing dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing Models
const Member = require("./Models/Member");
const Intern = require("./Models/Intern");
const User = require("./Models/User");
const Events = require("./Models/Event");

// Importing utility functions
const helper = require("./utilities/functions");

// Importing URIs from keys.js
const { mongoURI } = require("./config/keys");

// Importing Transporter of Nodemailer

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(mongoURI);
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register/member", helper.checkBody, async (req, res) => {
  const possibleNewMember = req.body.member;
  if (!helper.verifyInputs(possibleNewMember)) {
    return res.redirect("back");
  }
  try {
    const foundMember = await Member.findOne({
      email: possibleNewMember.email
    });
    if (foundMember) {
      return res.status(422).send("You have already registered");
    }
    const totalMembers = await Member.count({});
    const newId = Number(totalMembers) + 1;
    possibleNewMember.memberId = "SSM" + newId;
    const newMember = new Member(possibleNewMember);
    await newMember.save();
    helper.buildEmail(
      possibleNewMember.email,
      "Successful registeration as a Member",
      `<p>Thank you for becoming a part of out NGO as a member</p><p>Your member id is : ${
        possibleNewMember.memberId
      }</p>`
    );
    return res.send(
      `Thank You ${
        newMember.name
      } for becoming a member of Sacha Samarpan. Your membership ID will be sent to you on the provided email `
    );
  } catch (err) {
    res.send(err);
  }
});

app.post("/register/intern", helper.checkBody, async (req, res) => {
  const possibleNewIntern = req.body.intern;
  if (!helper.verifyInputs(possibleNewIntern)) {
    return res.status(422).redirect("back");
  }
  try {
    const foundIntern = await Intern.findOne({
      email: possibleNewIntern.email
    });
    if (foundIntern) {
      return res.status(422).send("You are already registered as an Intern");
    }
    const totalInterns = await Intern.count({});
    const newId = Number(totalInterns) + 1;
    possibleNewIntern.internId = "SSI" + newId;
    const newIntern = new Intern(possibleNewIntern);
    await newIntern.save();
    newIntern.save();
    helper.buildEmail(
      possibleNewIntern.email,
      "Successful registeration as an Intern",
      `<p>Thank you for becoming a part of out NGO as an intern</p><p>You Intern id is : ${
        possibleNewIntern.internId
      }</p>`
    );
    return res.send(
      `Thank you for joining us ${
        newIntern.name
      } as an Intern. We hope to work with you and bring a positive change in our society. Your internID will be sent to you on your provided Email`
    );
  } catch (error) {
    res.send(err);
  }
});

app.post("/support/email", helper.checkBody, (req, res) => {
  const verifyResult = helper.verifyInputs(req.body.message);
  if (!verifyResult) {
    res.status(422).redirect("back");
  } else {
    const userInput = req.body.message;
    helper.buildEmail(
      "sacchasamarpan@gmail.com",
      "User contact email",
      `<p>A user is trying to contact us, given below are the details of the user</p>
      <p>Name: ${userInput.fName} ${userInput.lName}</p>
      <p>Phone No.: ${userInput.phoneNo}</p>
      <p>Email Id: ${userInput.email}</p>
      <p>Message: ${userInput.body}</p>`
    );
    res.redirect("/");
  }
});

app.post("/user/register", helper.checkBody, async (req, res) => {
  const possibleNewUser = req.body.user;
  console.log(possibleNewUser);
  try {
    const existingUser = await User.findOne({ email: possibleNewUser.email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(422).send("User Already Exits");
    }
    const newUser = new User(possibleNewUser);
    await newUser.save();
    res.send("Successfull");
  } catch (err) {
    console.log(err);
    res.send("An error occured. Please try again later.");
  }
});

app.post("/user/login", helper.checkBody, async (req, res) => {
  const possibleUser = req.body.user;
  let userType;
  switch (possibleUser.typeOfUser) {
    case "Member":
      userType = Member;
      break;
    case "Intern":
      userType = Intern;
      break;
    default:
      return res.send("Select a user type");
  }
  try {
    const foundUser = await User.find({
      email: possibleUser.email,
      password: possibleUser.password,
      typeOfUser: possibleUser.typeOfUser,
    });
    if (foundUser.length !== 0) {
      res.send("Logged in");
    } else {
      res.status(422).send("Incorrect details");
    }
  } catch (error) {
    res.send(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server has started");
});

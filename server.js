const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Member = require("./Models/Member");
const { mongoURI } = require("./config/keys");

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(mongoURI);

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registration", async (req, res) => {
  const possibleNewMember = req.body.member;
  const attrToFind = {
    name: possibleNewMember.name,
    phone: possibleNewMember.phone
  };
  const foundMember = await Member.findOne(attrToFind);
  if (foundMember) {
    return res.send("You have already registered");
  }
  const newMember = await Member.create(possibleNewMember);

  res.send(
    "Thank You for becoming a member of our NGO. We wish a great journey helping needy people. Thank you again"
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server has started");
});

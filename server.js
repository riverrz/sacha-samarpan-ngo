// Importing dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing Routes
const userRoutes = require("./routes/User");
const memberRoutes = require("./routes/Member");
const internRoutes = require("./routes/Intern");
const supportRoutes = require("./routes/Support");

// Importing URIs from keys.js
const { mongoURI } = require("./config/keys");

// Importing Transporter of Nodemailer

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(mongoURI);
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

memberRoutes(app);
internRoutes(app);
userRoutes(app);
supportRoutes(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server has started");
});

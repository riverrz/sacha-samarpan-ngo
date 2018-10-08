const Transporter = require("../Mailer/Mailer");
const fs = require("fs");

const buildEmail = (to, subject, htmlContent) => {
  const mailOptions = {
    from: "sacchasamarpan@gmail.com",
    to,
    subject,
    html: htmlContent
  };
  Transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      throw err;
    }
  });
};
const checkBody = (req, res, next) => {
  if (
    !(req.body.member || req.body.intern || req.body.user || req.body.message)
  ) {
    return res.status(422).send("Please Enter details first!");
  }
  next();
};

const verifyInputs = message => {
  const { fName, lName, email, phoneNo, body } = message;
  const inputArr = Object.values(message);
  for (let i = 0; i < inputArr.length; i++) {
    if (typeof inputArr[i] !== "string") {
      return false;
    }
  }
  if (phoneNo.length !== 10 || isNaN(phoneNo)) {
    return false;
  }

  return true;
};

const deleteUploadFile = filename => {
  const path = __dirname + `/../../uploads/${filename}`;
  fs.stat(path, (err, stats) => {
    if (err) {
      console.log(err);
    }
    fs.unlink(path, err => {
      if (err) {
        console.log(err);
      }
      console.log("Delete upload file successfully");
    });
  });
};

module.exports = {
  buildEmail,
  verifyInputs,
  checkBody,
  deleteUploadFile
};

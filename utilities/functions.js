const Member = require("../Models/Member");
const Intern = require("../Models/Intern");
const Transporter = require("../Mailer/Mailer");
const findExistingMember = async attr => {
  return await Member.findOne(attr);
};
const findExistingIntern = async attr => {
  return await Intern.findOne(attr);
};

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

module.exports = {
  findExistingIntern,
  findExistingMember,
  buildEmail,
  verifyInputs
};

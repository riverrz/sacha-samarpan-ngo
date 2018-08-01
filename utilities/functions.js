const Member = require("../Models/Member");
const Intern = require("../Models/Intern");
const Transporter = require('../Mailer/Mailer');
const findExistingMember = async attr => {
    return await Member.findOne(attr);
};
const findExistingIntern = async attr => {
    return await Intern.findOne(attr);
};

const buildEmail = (emailId, joinType ,htmlContent) => {
    const mailOptions = {
        from: "sacchasamarpan@gmail.com",
        to: emailId,
        subject: `Successful registeration as ${ joinType }`,
        html: htmlContent
    };
    Transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            throw err;
        }
    });
}

module.exports = {
    findExistingIntern,
    findExistingMember,
    buildEmail
}
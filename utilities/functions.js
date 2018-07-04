const Member = require("../Models/Member");
const Intern = require("../Models/Intern");

const findExistingMember = async attr => {
    return await Member.findOne(attr);
};
const findExistingIntern = async attr => {
    return await Intern.findOne(attr);
};

module.exports = {
    findExistingIntern,
    findExistingMember
}
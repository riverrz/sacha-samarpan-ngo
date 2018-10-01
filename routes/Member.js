const Member = require("../Models/Member");
const helper = require("../utilities/functions");

module.exports = app => {
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

      // Handle fee
      possibleNewMember.lastPaid = Date.now();

      const newMember = new Member(possibleNewMember);
      await newMember.save();
      // helper.buildEmail(
      //   possibleNewMember.email,
      //   "Successful registeration as a Member",
      //   `<p>Thank you for becoming a part of out NGO as a member</p><p>Your member id is : ${
      //     possibleNewMember.memberId
      //   }</p>`
      // );
      return res.send(
        `Thank You ${
          newMember.name
        } for becoming a member of Sacha Samarpan. Your membership ID is ${
          possibleNewMember.memberId
        } `
      );
    } catch (err) {
      res.send(err);
    }
  });
};

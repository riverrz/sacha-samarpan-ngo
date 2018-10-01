const Intern = require("../Models/Intern");
const helper = require("../utilities/functions");

module.exports = app => {
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

      // Fee handle
      possibleNewIntern.lastPaid = Date.now();

      const newIntern = new Intern(possibleNewIntern);
      await newIntern.save();
      newIntern.save();
      // helper.buildEmail(
      //   possibleNewIntern.email,
      //   "Successful registeration as an Intern",
      //   `<p>Thank you for becoming a part of out NGO as an intern</p><p>You Intern id is : ${
      //     possibleNewIntern.internId
      //   }</p>`
      // );
      return res.send(
        `Thank you for joining us ${
          newIntern.name
        } as an Intern. We hope to work with you and bring a positive change in our society. Your internID is ${
          possibleNewIntern.internId
        }`
      );
    } catch (error) {
      res.send(err);
    }
  });
};

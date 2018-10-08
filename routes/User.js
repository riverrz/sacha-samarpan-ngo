const helper = require("../utilities/functions");
const User = require("../Models/User");
const Member = require("../Models/Member");
const Intern = require("../Models/Intern");
const jwt = require("jwt-simple");
const keys = require("../config/keys");
const { requireAuth, requireLogin } = require("../middlewares/middlewares");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.tokenSecret);
}

module.exports = app => {
  app.post("/user/register", helper.checkBody, async (req, res) => {
    const possibleNewUser = req.body.user;
    try {
      const existingUser = await User.findOne({
        $or: [
          { email: possibleNewUser.email },
          { typeId: possibleNewUser.typeId }
        ]
      });
      if (existingUser) {
        return res.status(422).send("User Already Exits");
      }
      let modelOfUser;
      let attributeToCheck;
      switch (possibleNewUser.typeOfUser) {
        case "Member":
          modelOfUser = Member;
          attributeToCheck = "memberId";
          break;
        case "Intern":
          modelOfUser = Intern;
          attributeToCheck = "internId";
          break;
        default:
          return res.json({ error: "Invalid user type" });
      }
      const idMatched = await modelOfUser.findOne({
        email: possibleNewUser.email,
        [attributeToCheck]: possibleNewUser.typeId
      });
      if (!idMatched) {
        return res.json({ error: "Invalid id or unregitered email" });
      }
      const newUser = new User(possibleNewUser);
      await newUser.save();
      res.json({ token: tokenForUser(newUser) });
    } catch (err) {
      res.send("An error occured. Please try again later.");
    }
  });

  app.post("/user/login", requireLogin, async (req, res) => {
    res.json({ token: tokenForUser(req.user) });
  });

  app.get("/getUser", requireAuth, async (req, res) => {
    if (req.user.isAdmin) {
      return res.json(req.user);
    }
    let currentUserModel;
    switch (req.user.typeOfUser) {
      case "Member":
        currentUserModel = Member;
        break;
      case "Intern":
        currentUserModel = Intern;
        break;
      default:
        return res.send({ error: "TypeOfUser is not valid" });
    }
    const userDetails = await currentUserModel.findOne({
      email: req.user.email
    });
    res.json(userDetails);
  });
};

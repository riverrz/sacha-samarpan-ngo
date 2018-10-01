const helper = require("../utilities/functions");

module.exports = app => {
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
};

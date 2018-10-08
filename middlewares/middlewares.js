const passport = require("passport");
require("../services/passport");

const requireLogin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = {
  requireAuth,
  requireLogin
};

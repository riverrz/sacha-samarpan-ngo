const passport = require("passport");
const keys = require("../config/keys");
const User = require("../Models/User");
const JwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: keys.tokenSecret
};

const localOptions = {
  usernameField: "email"
};

const localStrategy = new LocalStrategy(
  localOptions,
  (email, password, done) => {
    User.find({ email }, function(err, user) {
      if (err) {
        done(err);
      } else if (!user) {
        done(null, false);
      }
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          done(err);
        } else if (!isMatch) {
          done(null, false);
        } else {
          done(null, user);
        }
      });
    });
  }
);

const jwtLogin = new JwtStratergy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});
// Use strategy
passport.use(jwtLogin);
passport.use(localStrategy);

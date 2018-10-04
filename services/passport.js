const passport = require("passport");
const keys = require("../config/keys");
const User = require("../Models/User");
const JwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt-nodejs");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: keys.tokenSecret
};

const localOptions = {
  usernameField: "email"
};

const localStrategy = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  if (email === "sacchasamarpanadmin@yahoo.com") {
    bcrypt.compare(password, keys.adminPassword, function(err, isMatch) {
      if (err) {
        done(err);
      } else if (!isMatch) {
        done(null, false);
      } else {
        done(null, { id: keys.adminId });
      }
    });
  } else {
    User.findOne({ email }, function(err, user) {
      if (err) {
        return done(err);
      } else if (!user) {
        return done(null, false);
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
});

const jwtLogin = new JwtStratergy(jwtOptions, function(payload, done) {
  if (payload.sub === keys.adminId) {
    return done(null, {
      email: "sacchasamarpanadmin@yahoo.com",
      isAdmin: true
    });
  }
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

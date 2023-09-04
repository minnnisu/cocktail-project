const passport = require("passport");
const local = require("./localStrategy");

module.exports = () => {
  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      console.log(
        `serializeUser: userid(${user.id}), username(${user.username})`
      );
      cb(null, { id: user.userid, username: user.username });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });

  local();
};

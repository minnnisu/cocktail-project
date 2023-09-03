const passport = require("passport");
const local = require("./localStrategy"); // 로컬서버로 로그인할때
const userModel = require("../models/user");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
    // 세션에 id와 connect.sid가 저장됨
  });

  passport.deserializeUser((id, done) => {
    // req.session에 저장된 사용자 아이디를 바탕으로 DB 조회로 사용자 정보를 얻어낸 후 req.user에 저장.
    // 즉, id를 sql로 조회해서 전체 정보를 가져오는 복구 로직이다.
    userModel
      .findOne({ userid: id })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
};

const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const userModel = require("../../models/user");
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", isNotLoggedIn, function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    // new LocalStrategy(async function verify(username, password, cb){...}) 이후 작업
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) {
      console.log(info.message);
      return res.status(403).send(info.message);
    }

    // user정보 session storage에 저장
    return req.login(user, (err) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      return res.status(200).send("로그인 성공");
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send("로그아웃 성공");
  });
});

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
  try {
    const user = await userModel.findOne({ userid: req.body.userid });
    if (user) {
      return res.status(403).send("이미 존재하는 회원입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12); //hash(패스워드, salt횟수)
    const { userid, username, alias, telephone, email, created_at } = req.body;

    const newUser = new userModel({
      userid,
      password: hashedPassword,
      username,
      alias,
      telephone,
      email,
      created_at,
    });

    await newUser.save();
    res.status(201).send("회원가입을 완료하였습니다.");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 세션 저장소에 사용자 ID가 있다면 DB를 조회하여 req.user에 정보를 삽입 (deserializeUser() 함수
router.get("/user", isLoggedIn, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;

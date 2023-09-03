const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth"); // 내가 만든 사용자 미들웨어
const userModel = require("../../models/user");
const { ValidationError } = require("../../service/ErrorHandler");

const router = express.Router();

router.post("/sign-up", isNotLoggedIn, async (req, res, next) => {
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

router.post("/login", isNotLoggedIn, (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      // done(err)
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      console.log(info.message);
      return res.status(403).send(info.message);
    }

    return req.login(user, (loginError) => {
      // passport.deserializeUser -> done(err)
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }

      return res.status(200).send("로그인 성공");
    });
  })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send("로그아웃 성공");
});

router.get("/user", isLoggedIn, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;

const passport = require("passport");
const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const { ValidationError } = require("./ErrorHandler");

exports.localLogin = function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    // new LocalStrategy(async function verify(username, password, cb){...}) 이후 작업
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(403).send(info.message);
    }

    // user정보 session storage에 저장
    return req.login(user, (err) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      return res.status(200).send("로그인에 성공하였습니다.");
    });
  })(req, res, next);
};

exports.logout = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send("로그아웃에 성공하였습니다.");
  });
};

exports.signup = async function (req, res, next) {
  try {
    const user = await userModel.findOne({ userid: req.body.userid });
    if (user) {
      return next(new ValidationError("이미 존재하는 회원입니다."));
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
};

exports.getUser = function (req, res, next) {
  res.status(200).send(req.user);
};

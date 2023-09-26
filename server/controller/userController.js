const userModel = require("../models/user");
const postModel = require("../models/post");
const { NotFoundError } = require("./ErrorHandler");

// 패스워드 해시값은 제외하고 전달!!!!!
exports.getUser = async function (req, res, next) {
  try {
    const {
      id,
      username,
      nickname,
      telephone,
      email,
      makedCocktails,
      isAdmin,
    } = await userModel.findOne({ id: req.user.id });
    const sendData = {
      id,
      username,
      nickname,
      telephone,
      email,
      makedCocktails,
      isAdmin,
    };
    res.status(200).send(sendData);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async function (req, res, next) {
  try {
    const user = await userModel.findOne({ id: req.user.id });
    if (user) {
      await user.deleteOne();
    } else {
      return next(new NotFoundError("존재하지 않는 회원입니다."));
    }

    req.logout(async function (err) {
      if (err) {
        return next(err);
      }
      res.status(203).send();
    });

    await postModel.deleteMany({ "author.id": user.id });

    res.status(203).send();
  } catch (error) {
    next(error);
  }
};

const userModel = require("../models/user");

// 패스워드 해시값은 제외하고 전달!!!!!
exports.getUser = async function (req, res, next) {
  const { id, username, nickname, telephone, email, makedCocktails } =
    await userModel.findOne({ id: req.user.id });
  const sendData = {
    id,
    username,
    nickname,
    telephone,
    email,
    makedCocktails,
  };
  res.status(200).send(sendData);
};

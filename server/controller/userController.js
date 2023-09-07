const userModel = require("../models/user");

// 패스워드 해시값은 제외하고 전달!!!!!
exports.getUser = async function (req, res, next) {
  const { userid, username, alias, telephone, email, makedCocktails } =
    await userModel.findOne({ userid: req.user.id });
  const sendData = {
    userid,
    username,
    alias,
    telephone,
    email,
    makedCocktails,
  };
  res.status(200).send(sendData);
};

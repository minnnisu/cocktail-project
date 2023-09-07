// 패스워드 해시값은 제외하고 전달!!!!!
exports.getUser = function (req, res, next) {
  res.status(200).send(req.user);
};

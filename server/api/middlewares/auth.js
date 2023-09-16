const { ValidationError } = require("../../controller/ErrorHandler");

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return next(new ValidationError("로그인이 필요합니다.", "NEED_LOGIN"));
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  return next(new ValidationError("로그인 한 상태입니다.", "ALREADY_LOGIN"));
};

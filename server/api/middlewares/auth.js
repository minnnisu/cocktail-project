exports.isLoggedIn = (req, res, next) => {
  // isAuthenticated()로 검사해 로그인이 되어있으면
  console.log(req.session.id);
  console.log(req.user);
  if (req.isAuthenticated()) {
    next(); // 다음 미들웨어
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next(); // 로그인 안되어있으면 다음 미들웨어
  } else {
    res.status(403).send("로그인 한 상태입니다");
  }
};

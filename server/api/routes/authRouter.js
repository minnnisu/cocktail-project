const express = require("express");
const authMiddleware = require("../middlewares/auth");
const authController = require("../../controller/authController");

const router = express.Router();

router.post("/login", authMiddleware.isNotLoggedIn, authController.localLogin);

router.post("/logout", authMiddleware.isLoggedIn, authController.logout);

router.post("/signup", authMiddleware.isNotLoggedIn, authController.signup);

// 세션 저장소에 사용자 ID가 있다면 DB를 조회하여 req.user에 정보를 삽입 (deserializeUser() 함수
router.get("/user", authMiddleware.isLoggedIn, authController.getUser);

module.exports = router;

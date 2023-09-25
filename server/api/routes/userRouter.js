const express = require("express");
const authMiddleware = require("../middlewares/auth");
const userController = require("../../controller/userController");

const router = express.Router();

// 세션 저장소에 사용자 ID가 있다면 DB를 조회하여 req.user에 정보를 삽입 (deserializeUser() 함수
router
  .get("/", authMiddleware.isLoggedIn, userController.getUser)
  .delete("/", authMiddleware.isLoggedIn, userController.deleteUser);

module.exports = router;

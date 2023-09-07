const express = require("express");
const authMiddleware = require("../middlewares/auth");
const authController = require("../../controller/authController");

const router = express.Router();

router.post("/login", authMiddleware.isNotLoggedIn, authController.localLogin);

router.post("/logout", authMiddleware.isLoggedIn, authController.logout);

router.post("/signup", authMiddleware.isNotLoggedIn, authController.signup);

module.exports = router;

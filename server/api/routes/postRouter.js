const express = require("express");
const authMiddleware = require("../middlewares/auth");
const postController = require("../../controller/postController");

const router = express.Router();

router
  .get("/", authMiddleware.isLoggedIn, postController.getPost)
  .post("/", authMiddleware.isLoggedIn, postController.postPost);

module.exports = router;
